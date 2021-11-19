use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};
use near_sdk::{near_bindgen, setup_alloc};

setup_alloc!();

#[near_bindgen]
#[derive(Default, BorshDeserialize, BorshSerialize)]
pub struct GreetContract {}

#[near_bindgen]
impl GreetContract {
    pub fn greet(&self, name: String) -> String {
        format!("Hello {}!", name)
    }
}
