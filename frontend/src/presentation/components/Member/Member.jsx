import "./Member.css";
import { useDataContext } from '../../../middleware/context/DataContext';

function Member() {
  const { memberList } = useDataContext();

  console.log(memberList)
  return (
    <div className="member">
      {memberList.map((member) => (
        <div key={member.id}>
          <p>{member.id}</p>
          <p>{member.name}</p>
          <p>{member.category}</p>
          <p className="bold">{member.cuantity}€</p>
       </div>
      )
      )
      }
      </div>
  )
}
export default Member;