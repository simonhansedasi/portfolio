import random
from collections import Counter
from tqdm import tqdm
import matplotlib.pyplot as plt
import pandas as pd

# establish ranks and suits
ranks = [str(i) for i in range(2, 11)] + ['J', 'Q','K','A']
suits = ['S','H','D','C']

# assign values to cards
card_values = {rank:int(rank) for rank in ranks[:-4]}     # assign values for 2-10
card_values.update({k:10 for k in ranks[-4:-1]})          # assign values for J-K
card_values.update({'A':11})                              # assign value to A

hi_lo_values = {
    **{str(i): 1 for i in range(2, 7)},
    **{str(i): 0 for i in range(7, 10)},
    '10': -1, 'J': -1, 'Q': -1, 'K': -1, 'A': -1
}


# build the deck and shoe from which we will play
def create_deck():
    return [rank for rank in ranks for _ in suits]    
    
def create_shoe(n_decks = 1):
    shoe = []                                         
    for _ in range(n_decks):
        shoe.extend(create_deck())                   
    random.shuffle(shoe)                            
    return shoe


# basic hand logic
def deal_card(shoe, n = 1):
    if len(shoe) < n:
        return []
    return [shoe.pop(0) for _ in range(n)]
    
# total player's hand to establish betting logic\
def sum_hand(player):
    return sum(
        [card_values[card] for card in player]
    )
# define basic strategy for hit/hold
def player_choice(player, player_target, shoe):
    player_total = sum_hand(player)

    while player_total < player_target:
        new_cards = deal_card(shoe)
        if not new_cards:
            break
        new_card = new_cards[0]
        player.append(new_card)
        player_total = sum_hand(player)
    return player, player_total


def player_choice_counting(player, player_target, shoe, true_count = 0):
    if true_count >= 3:
        player_target -= 4
        
    elif true_count <= -2:
        player_target += 2

    player_total = sum_hand(player)

    while player_total < player_target and len(shoe) > 0:
        player.append(deal_card(shoe)[0])
        player_total = sum_hand(player)
    return player, player_total



def play_hand(
    shoe, player_target, dealer_target
):

    player = deal_card(shoe,n = 2)
    dealer = deal_card(shoe,n = 2)

    

    winner = None
    
    player, player_total = player_choice(player, player_target, shoe)
    
    if player_total > 21:
        return 'Dealer', shoe
    
    dealer, dealer_total = player_choice(dealer, dealer_target, shoe)
    
    if dealer_total > 21:
        return 'Player', shoe
    
    if player_total > dealer_total:
        return 'Player', shoe
    
    else:
        return 'Dealer', shoe

def play_hand_with_player_counting(
    shoe, player_target, dealer_target, running_count = 0,
    
):
    player = deal_card(shoe,n = 2)
    dealer = deal_card(shoe,n = 2)

    visible_cards = player + [dealer[0]]
    running_count += sum(hi_lo_values[card] for card in visible_cards)

    decks_remaining = max(len(shoe) / 52, 1)
    true_count = running_count / decks_remaining
    
    player, player_total = player_choice_counting(player, player_target, shoe, true_count)
    
    if player_total > 21:
        return 'Dealer', shoe, running_count

    running_count += sum(hi_lo_values[card] for card in player[2:])

    dealer, dealer_total = player_choice(dealer, dealer_target, shoe)
    if dealer_total > 21:
        return 'Player', shoe, running_count

    running_count += sum(hi_lo_values[card] for card in dealer[2:])

    if player_total > dealer_total:
        return 'Player', shoe, running_count
    else:
        return 'Dealer', shoe, running_count



def update_running(cards, running_count, hi_lo_values):
    for card in visible_cards:
        running_count += hi_lo_values[card]
    return running_count

def count_cards(shoe):
    return Counter(shoe)

def card_probability(card, card_counter):
    return card_counter[card] / sum(card_counter.values())

# establish probability of cards remaining
def calculate_card_probabilities(shoe):
    return {
                rank:card_counter[rank] / len(shoe) for rank in ranks
            }


def simulate_games(n_games, shoe_size, player_target, dealer_target):
    scoreboard = []
    for i in (range(n_games)):
        wins = {
            'Player':0,
            'Dealer':0
        }
        shoe = create_shoe(n_decks = shoe_size)
        
        while len(shoe) > 4:
            
            winner, shoe = play_hand(shoe, player_target, dealer_target)
        
            wins[winner] += 1
    
        scoreboard.append(wins)
    
    return scoreboard



def simulate_games_with_counting(n_games, shoe_size, player_target, dealer_target):
    scoreboard = []
    for i in (range(n_games)):
        wins = {
            'Player':0,
            'Dealer':0
        }
        shoe = create_shoe(n_decks = shoe_size)
        
        running_count = 0
        
        while len(shoe) > 4:
            
            winner, shoe, running_count = play_hand_with_player_counting(
                shoe, running_count, player_target, dealer_target
            )
        
            wins[winner] += 1
    
        scoreboard.append(wins)
    
    return scoreboard