import Link from 'next/link';
import { useClient } from 'next/dist/client';
// import {useState} from 'react';
import '../app/globals.css';
const apiKey="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";
 
function Home() {

  const [isClient, setIsClient] = useState(false);
  // const [context,contextCreater]=useState("");
  const client = useClient();
  useEffect(() => {
    setIsClient(true);
  }, []);

  let xyz = async()=>{

const response = await fetch('https://api.openai.com/v1/engines/davinci/completions',{
      method: 'POST',
      headers: {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
      }
      },
      body: JSON.stringify({
        "context": "tell me about jarvis",
        "mood": "inspirational"
      })
    }
    );

  }













  return (
    <div className='allOfTheAbove' >
      <h1 className='heading1 '>Welcome to Moodifier</h1>
      <p className='text1'>
        enter the text you want below and enter the mood that you want to convert the above content in
      </p>
      <p className='text2'>Be a girl play with emotions</p>
      <input className='contextInput' type="text" value="enter the context here" />
      <input className='moodInput' type="text" value="enter the Mood here" />
      <button className='moodBtn' onClick={xyz} >Moodify</button>

    </div>
  )
}
 
export default Home;