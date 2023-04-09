//SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "./TokenDistrubutionMechanism.sol";
import "@chainlink/contracts/src/v0.8/interfaces/VRFCoordinatorV2Interface.sol";
import "@chainlink/contracts/src/v0.8/VRFConsumerBaseV2.sol";
import "@chainlink/contracts/src/v0.8/ConfirmedOwner.sol";

import "@chainlink/contracts/src/v0.8/mocks/VRFCoordinatorV2Mock.sol";


// each user that deposits money triggers creating tokens for contract (mint)
// contract then rewards only some users


error notEnoughEther();
error Raffle__UpkeepNotNeeded(uint256 currentBalance);

contract Distrubution is TokenDistrubutionMechanism,
    VRFConsumerBaseV2,
    ConfirmedOwner
    {

    struct RequestStatus {
        uint256 paid; // amount paid in link
        bool fulfilled; // whether the request has been successfully fulfilled
        uint256[] randomWords;
    }
        
    /* State Variables*/
    // Distrubution Mechanism variables
    uint8 private constant NEW_USER_POINTS = 5;
    uint8 private constant NEW_USER_MINTED_TOKENS = 10; 
    address private s_owner;
    uint256 private s_lastTimeStamp;
    uint256 private constant INTERVAL = 40; //seconds
    mapping(address => uint256) s_points;
    mapping(address => uint256) s_guess;
    
    uint8 private correctNumber;

    //Chainlink variables
    mapping(uint256 => RequestStatus) public s_requests; /* requestId --> requestStatus */

    uint256[] public requestIds;
    uint256 public lastRequestId;
    uint64 s_subscriptionId = 1;
    uint32 callbackGasLimit = 100000;
    uint16 REQUEST_CONFIRMATIONS = 3;
    uint32 private constant NUM_WORDS = 1;
    bytes32 keyHash =
        0x474e34a077df58807dbe9c96d3c009b23b3c6d0cce433e59bbf5b34f823bc56c;

    VRFCoordinatorV2Interface private immutable i_vrfCoordinator;

    constructor()
        VRFConsumerBaseV2(0x8103B0A8A00be2DDC778e6e7eaa21791Cd364625)
        ConfirmedOwner(msg.sender){      

        s_owner = msg.sender;

        //i_vrfCoordinator = VRFCoordinatorV2Interface(vrfCoordinatorV2);
        i_vrfCoordinator = VRFCoordinatorV2Interface(
            0x8103B0A8A00be2DDC778e6e7eaa21791Cd364625
        );
    }

    // Assumes the subscription is funded sufficiently.
    function requestRandomWords()
        external
        onlyOwner
        returns (uint256 requestId)
    {
        // Will revert if subscription is not set and funded.
        return requestId = i_vrfCoordinator.requestRandomWords(
            keyHash,
            s_subscriptionId,
            REQUEST_CONFIRMATIONS,
            callbackGasLimit,
            NUM_WORDS);
    }

    function fulfillRandomWords(
        uint256 _requestId,
        uint256[] memory _randomWords
    ) internal override {
        s_requests[_requestId].randomWords = _randomWords;

        correctNumber = uint8(_randomWords[0] % 4);
        
        // if pessoas escolheram numero certo ganham pontos

    }

    /// @dev user needs to pay a fee to participate
    /// @dev new tokens are created per new user
    function createUser(address newUser) public payable {
        if (newUser == address(0)) {
            revert AddressIsZero();
            }
        if (msg.value < 1 * 10 **18) {
            revert notEnoughEther();
        }
        _mint(address(this), NEW_USER_MINTED_TOKENS);
        s_points[newUser] = NEW_USER_POINTS;
    }

    function givePoints(address user, uint amount) internal {
        s_points[user] += amount;
    }

    function chooseRandomNumber() internal {
        //get random number from 1 - 4
        //if a user got it right rewardUser
    }

    // View / Pure functions
    function pointsOf(address userAddress) public view returns(uint256){
        return s_points[userAddress];
    }

    function getCorrectNumber() public view returns (uint8){
        return correctNumber;
    }

    //on timestamp distribute percentage of tokens (as reward for some users) --> chainlink?
    //withdraw token value


}
