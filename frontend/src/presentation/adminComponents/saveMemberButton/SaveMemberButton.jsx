import "./SaveMemberButton.css"

export default function SaveMemberButton({handleMember}) {
  return (
    <button className="buttonSave" onClick={handleMember} >CONFIRMAR</button>
  )
}
