
import user from "../user.json"
import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import data from "../data.json"
import friends from "../friends.json"
import { FriendList } from "./Friends/FriendsList"
import { TransactionHistory } from "./Transaction/Transaction"
import transactions from "../transactions.json"


export const App = () => {
  return (
    <>

<Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
      />
      <Statistics
        title="Upload stats" stats={data} />
     
      <FriendList friends={friends} />;
    
<TransactionHistory items={transactions} />;
   </>
  );
};

