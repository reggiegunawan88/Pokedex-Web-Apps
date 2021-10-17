function Meterbar(props) {
  return (
    <div className="w-full h-2 bg-grey-30 rounded-full">
      <div style={{ width: `${props.value}%` }} className="h-2 bg-green-50 rounded-full"></div>
    </div>
  );
}

export default Meterbar;
