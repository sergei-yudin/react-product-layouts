export default function IconSwitch({ icon, onSwitch }) { return <button className="icon-switch material-icons" type="button" onClick={onSwitch} aria-label="Переключить вид">{icon}</button>; }
