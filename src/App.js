
import { useState } from 'react';
import './App.css';

function App() {

  const [people, setPeople] = useState({ fname: '', age: '', email: '', Password: '' });

  const [searched, setSearched] = useState("");

  const [selected, setSelected] = useState("");

  const [data, setData] = useState(JSON.parse(localStorage.getItem('forminput')) || []);

  const handleChange = (e) => {
    console.log(e.target.name)
    setPeople({ ...people, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    setData([...data, people])
    localStorage.setItem("forminput", JSON.stringify([...data, people]));
  }
  console.log(data);
  console.log(people);


  const searchData = () => {

    if (selected === "w") {
      const filteredDataa = data.filter((item) => { return (item?.fname?.toLocaleLowerCase().includes(searched?.toLocaleLowerCase())) });
      console.log(filteredDataa);
      setData([...filteredDataa]);
    }

    else if (selected === "x") {
      const filteredDataa = data.filter((item) => { return (item?.age?.toLocaleLowerCase().includes(searched?.toLocaleLowerCase())) });
      console.log(filteredDataa);
      setData([...filteredDataa]);

    }

    else if (selected === "y") {
      const filteredDataa = data.filter((item) => { return (item?.email?.toLocaleLowerCase().includes(searched?.toLocaleLowerCase())) });
      console.log(filteredDataa);
      setData([...filteredDataa]);

    }

    else if (selected === "z") {
      const filteredDataa = data.filter((item) => { return (item?.Password?.toLocaleLowerCase().includes(searched?.toLocaleLowerCase())) });
      console.log(filteredDataa);
      setData([...filteredDataa]);

    }

  }

  return (
    <>
      <div style={{ backgroundImage: "url(https://influencermarketinghub.com/wp-content/uploads/2019/11/shutterstock_1038395047-1024x576.jpg)", backgroundSize: "cover", height: "953px", width: "100%" }}>

        <div className='flex flex-col items-center gap-[60px] pt-[7%] ml-[40%]'>

          <div className='flex flex-col gap-3'>
            <label htmlFor="fname" className='font-bold text-xl text-[#432c16]'>Full Name:</label>
            <input type="text" id="fname" name="fname" value={people.fname} onChange={(e) => handleChange(e)} className='h-[25px] w-[400px] rounded-[5px] bg-transparent border-[#4c5a40]' />
          </div>

          <div className='flex flex-col gap-3'>
            <label htmlFor="age" className='font-bold text-xl text-[#432c16]'>Age:</label>
            <input type="number" id='age' name="age" value={people.age} onChange={(e) => handleChange(e)} className='h-[25px] w-[400px] rounded-[5px] bg-transparent border-[#4c5a40]' />
          </div>

          <div className='flex flex-col gap-3'>
            <label htmlFor="email" className='font-bold text-xl text-[#432c16]'>E-mail:</label>
            <input type="email" id='email' name="email" value={people.email} onChange={(e) => handleChange(e)} className='h-[25px] w-[400px] rounded-[5px] bg-transparent border-[#4c5a40]' />
          </div>

          <div className='flex flex-col gap-3'>
            <label htmlFor="Password" className='font-bold text-xl text-[#432c16]'>Password:</label>
            <input type="password" id="Password" name="Password" value={people.Password} onChange={(e) => handleChange(e)} className='h-[25px] w-[400px] rounded-[5px] bg-transparent border-[#4c5a40]' />
          </div>

          <button type='submit' onClick={handleSubmit} className='font-bold text-xl h-[50px] w-[150px] mt-[30px] rounded-[10px] bg-transparent border-[#4c5a40] text-[#432c16]' >Submit</button>

        </div>

      </div>

      <div className='flex gap-[20px] justify-center mt-[30px]' >

        <div>
          <select onChange={(e) => setSelected(e.target.value)} className='h-[30px] w-[180px] bg-transparent text-[16px] font-bold text-[#432c16] border-[#4c5a40] border-2 rounded-[5px]'>
            <option value="">Select Field:</option>
            <option value="w">Full Name</option>
            <option value="x">Age</option>
            <option value="y">E-mail</option>
            <option value="z">Password</option>
          </select>
        </div>

        <div>
          <input type="search" id="search" name="search" onChange={(e) => setSearched(e.target.value)} className='border-[#4c5a40] rounded-[5px] h-[30px] w-[300px]' /> <button type='search' onClick={() => searchData()} className='border-[#4c5a40] rounded-[5px] h-[30px] w-[50px]'> <svg
            xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
            viewBox="0 0 16 16">
            <path
              d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg> </button>
        </div>

      </div >

      <div className='flex gap-[20px] justify-center mt-[30px]'>

        <table>

          <thead>
            <th>Full Name:</th>
            <th>Age:</th>
            <th>E-mail:</th>
            <th>Password:</th>
          </thead>

          <tbody>

            {data.map((item, index) => {
              return (
                <tr>
                  <td>{item.fname}</td>
                  <td>{item.age}</td>
                  <td>{item.email}</td>
                  <td>{item.Password}</td>
                </tr>
              )
            })}

          </tbody>

        </table>
      </div>

    </>
  );
}

export default App;
