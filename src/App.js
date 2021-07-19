import Descriptor from './components/Descriptor';

const jonhead_sends_json = [
    {
      descriptor: 'Name',
      user_input: 'Maiya Blackwood'
    },
    {
      descriptor: 'Height',
      user_input: '5\'5"'
    },
    {
      descriptor: 'Personality',
      user_input: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultricies suscipit tempus. Nulla sed urna augue. Phasellus semper tempus pulvinar. Maecenas eu maximus metus, et sollicitudin urna. Etiam nunc sapien, hendrerit et elementum non, efficitur vitae nibh. Proin vitae porttitor lectus. Curabitur ac fringilla sem, ut accumsan dui.'
    },
    {
      descriptor: 'Quirks',
      user_input: 'Drinking problem. Likes cheese.'
    },
  ]

function App() {
  return (
    <div className="flex flex-col items-center h-screen bg-gradient-to-bl from-indigo-400 via-indigo-500 to-indigo-600">
      <h1 className="text-indigo-50 text-center py-5 text-3xl font-mono">Character Sheets</h1>
      <div className="w-6/12">
        {jonhead_sends_json.map(desc => (
          <Descriptor 
            descriptor={desc.descriptor} 
            userInput={desc.user_input}
            />
        ))}
      </div>
    </div>
  );
}

export default App;
