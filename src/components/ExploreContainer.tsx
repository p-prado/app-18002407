import './ExploreContainer.css';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {

  var q = document.getElementById("q");
  var qs = document.getElementById("qs");
  var converted = document.getElementById("converted");
  q?.addEventListener('change',function(){
    if (q && converted && qs) {
      var inputValue = parseFloat((q as HTMLInputElement).value);
      qs.textContent = inputValue.toString();
      converted.textContent = (inputValue * 8).toString(); 
    } else {
      alert("NULL");
    }
  });

  return (
    <div className="container">
      <h1>DivisAPP</h1>
      <p>Convierte dolares a quetzales.</p>
      <div className="input-group">
        <label htmlFor="q">Ingresa una cantidad en quetzales:</label>
        <input type="number" name="q" id="q" placeholder='Q0.00' step='0.01'/>
      </div>
      <p className="result">Q<span id='qs'>0.00</span> = $<span id='converted'>0.00</span></p>
    </div>
  );
};

export default ExploreContainer;
