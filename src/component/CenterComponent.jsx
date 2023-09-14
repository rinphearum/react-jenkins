import React, { useState } from "react";
export default function CenterComponent() {

  const [place, myPlace] = useState(
    [
      {
        id: 1,
        title: "koh kong krav",
        description:
          "Koh Kong Krav Beach is in the 5th place out of 13 beaches in the Koh Kong region The beach is located in a natural place, among the mountains. It is partially covered 	   by trees which give natural shade. It is a spacious coastline with crystal turquoise water and white fine sand, so you don't need special shoes.",
        status: "Beach",
        peopleGoing: "1537",
      },
      {
        id: 2,
        title: "phnom sampov",
        description:
          " This legendary 100 metres high mountain, topped by Wat Sampeou, contains 3 natural caves, lined with Buddhist shrines and statues: Pkasla, Lakhaon and Aksopheak.",
        status: "Mountain",
        peopleGoing: "81000",
      },
      {
        id: 3,
        title: "kirirom",
        description:
          "Kirirom National Park, a high altitude plateau, is known for its unique high elevation pine forest, which forms the headwaters for numerous streams feeding Kampong 	   	   Speu Town.",
        status: "Forest",
        peopleGoing: "2500",
      },
    ]
  );  

  const [newPlace, setNewPlace] = useState([

  ])

  const handleChange = (e) => {
    const {name, value} = e.target;
    setNewPlace({...newPlace,[name]: value})  ;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    myPlace([...place,{...newPlace, id: place.length+1}]);
  }
  const changeButton = (items) =>{
    for(let i=0; i<place.length; i++){
      console.log(items)
      if(place[i].id === items.id){
        items.status =
        items.status === "Beach"
          ? "Mountain"
          : items.status === "Mountain"
          ? "Forest"
          : items.status === "Forest"
          ? "Beach"
          : "Beach";
          const newPlace = [...place];
          newPlace[i] = items;
          myPlace(newPlace);
          // console.log(items);
          break;

          

      }
      
    }
  }
  
  // console.log(newPlace);
  return (
    <div className="w-9/12 bg-sky-700 h-screen">
      <div className="flex flex-row justify-between mt-10 ml-10 mr-24">
        <div>
          <h1 className="inline-block text-4xl text-yellow-100">
            Good Evening Team!
          </h1>
        </div>
        <div className="mt-5">
          {/* The button to open modal */}
          <label htmlFor="my-modal-add" className="btn bg-white text-black hover:text-white">
            Add New Trip
          </label>

          {/* Put this part before </body> tag */}
          <input type="checkbox" id="my-modal-add" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box relative">
              <label
                htmlFor="my-modal-add"
                className="btn btn-sm  btn-circle absolute right-2 top-2"
              >
                ✕
              </label>

              <form className="">
                <div class="mb-6">
                  <label
                    for="tittle"
                    class="flex items-start mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Title
                  </label>
                  <input
                  onChange={handleChange}
                    name="title"
                    type="text"
                    id="title"
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder="Input tittle"
                  />
                </div>
                <div class="mb-6">
                  <label
                    for="description"
                    class="flex items-start mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Description
                  </label>
                  <input
                  onChange={handleChange}
                    name="description"
                    type="text"
                    id="description"
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder="input description"                   
                  />
                </div>
                <div class="mb-6">
                  <label
                    for="people-going"
                    class="flex items-start mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >                    
                    People Going
                  </label>
                  <input
                  onChange={handleChange}
                    name="peopleGoing"
                    type="number"
                    step="any"
                    min="1"
                    id="peopleGoing"
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder=""
                    required
                  />
                </div>
                <div class="mb-6">
                  <label
                    for="type-of-advanture"
                    class=" mb-2 text-sm font-medium text-gray-900 dark:text-white flex items-start"
                  >
                    Type of Advanture
                  </label>
                  {/* <input type="advanture" id="advanture" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required/> */}
                  <select
                    
                    onChange={handleChange}
                    className='class=" h-10 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full'
                    name="status"
                    id=""
                  >
                    <option name="status" value="">-- Choose Your Option --</option>
                    <option name="status" value="Beach">Beach</option>
                    <option name="status" value="Forest">Forest</option>
                    <option name="status" value="Mountain">Mountain</option>
                  </select>
                </div>
                <button
                  type="submit"
                  onClick={handleSubmit}
                  class="btn text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 flex  flex-wrap  gap-y-10 justify-between m-10">
        <div className="grid grid-cols-3 gap-8">
          {
            place.map(
              (items) => (
                <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  text-start">
                <a href="#">
                  <h5 class=" capitalize mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {items.title}
                  </h5>
                </a>
                <p
                  id="truncate"
                  class=" border-b border-gray-500 mb-3 font-normal text-gray-700 dark:text-gray-400"
                >
                 {items.description}
                </p>
                <p className="font-bold">Pepole Going</p>
                {items.peopleGoing}
                <div className="flex flex-row justify-around mt-2">
                  <div>
                    <button
                      onClick={()=>changeButton(items)}
                      type="button"
                      class= {items.status === "Beach"?"btn focus:outline-none text-white bg-blue-700  focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900":items.status==="Mountain"?" btn focus:outline-none text-white bg-gray-700  focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900":"btn focus:outline-none text-white bg-green-700  focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" } 
                        >
                      {items.status}
                      {/* submit */}
                    </button>
                  </div>
                  <div>
                    <label   htmlFor={`my-modal-${items.id}`} className="btn bg-yellow-700">
                      Read Details
                    </label>      
                    {/* Put this part before </body> tag */}
                    <input type="checkbox" id={`my-modal-${items.id}`} className="modal-toggle" />
                    <div className="modal">
                      <div className="modal-box relative">
                        <label
                          htmlFor={`my-modal-${items.id}`}
                          className="btn btn-sm btn-circle absolute right-2 top-2"
                        > 
                          ✕
                        </label>
                        <h3 className="text-lg font-bold uppercase">
                          {items.title}
                        </h3>
                        <p className="py-4">
                        {items.description}

                        </p>
                        <p>Around <b>{items.peopleGoing}</b> people going there</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              )
            )
          }
     
        </div>

      </div>
    </div>
  );
}
