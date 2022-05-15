export default function GroupByRadioButton(props) {
  return (
    <>
      <input
        type="radio"
        name='group-by'
        id='continent-label'
        style={{display: 'none'}}
      ></input>
      <label
        for='continent-label'
        className="btn btn-dark"
      >
        {props.text}
      </label>
    </>
  )
}