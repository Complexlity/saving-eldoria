import dummyImg from '../assets/dummy.png'

const Introduction = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-center">Introduction</h1>
      <div className="grid md:grid-cols-2 mx-auto bg-green-400">
        <div className='prose grid items-center'>
        <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ratione nostrum repellendus culpa. Adipisci eius doloribus iure repudiandae provident harum placeat beatae ullam labore, consequatur repellendus veritatis veniam sed accusantium?</p>
        </div>
        <div className="grid justify-center ">
        <img src={dummyImg} alt="" className=""/>
        </div>
      </div>
    </div>
  );
}

export default Introduction;