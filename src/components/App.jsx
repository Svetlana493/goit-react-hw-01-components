import Statistics from './statistics/Statistics';
import Container from './Container/Container';
import Profile from './profile/Profile';
import FriendList from './friendList/FriendList';
import TransactionHistory from './transactionHistory/TransactionHistory';
import user from '../data/user.json';
import data from '../data/data.json';
import friendList from '../data/friends.json';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

        color: '#010101',
      }}
    >
      <Container>
        <Profile
          className="profile"
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />

        <Statistics title="Upload stats" stats={data} />

        <FriendList friends={friendList} />

        <TransactionHistory items={transactions} />
      </Container>
    </div>
  );
};
