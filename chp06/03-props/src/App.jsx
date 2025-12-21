import Card from './components/Card.jsx'

const App = () => {
  return (
    <div className="parent">
        

    <Card user= 'Khemu' age ={21}  img='https://plus.unsplash.com/premium_photo-1759390813200-232d7a74df15?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU3fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=600' />
    <Card user= 'Aksh' age ={20} img='https://images.unsplash.com/photo-1761165308325-e54c62985813?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=600' />

    <Card user='kombdi' age={25} img ='https://plus.unsplash.com/premium_photo-1759855991081-2de429450962?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=600' />

    </div>
  )
}

export default App
