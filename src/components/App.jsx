// import user from '../data/user.json';
// import Profile from './Profile/Profile';
// import data from '../data/data.json';
// import Statistics from './Statistics/Statistics';
// import friends from '../data/friends.json';
// import FriendList from './FriendList/FriendList';
// import items from '../data/transactions.json';
// import { TransactionHistory } from './TransactionHistory/TransactionHistory';
// import Reviews from 'modules/Reviews/Reviews';
import Phonebook from 'modules/Phonebook/Phonebook';
export const App = () => {
  return (
    <>
      {/* <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={items} /> */}
      {/* <Reviews /> */}
      <Phonebook />
    </>
  );
};
