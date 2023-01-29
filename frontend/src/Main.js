import './Main.css';
import InputForm from './InputForm';

function Main() {
  return (
    <div className="Main">
      <header className="Main-header">
        <h1 className="main-title">HackMates</h1>
        <h2 className="description">Fill out the following form to get paired with other team members. 
          You will recieve an email after the deadline with 8 other compatable members. </h2>
        <InputForm />
        <h2 className="credits"> Created By: Katelyn Ryan, Olivia Pinson, Andrea Chacon, Arjun Singh</h2>
        <iframe src="https://giphy.com/embed/ZgQbzK76q50CQaZzpK" width="256" height="256" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/UF-florida-university-of-ZgQbzK76q50CQaZzpK"></a></p>
      </header>
    </div>
  );
}

export default Main;
