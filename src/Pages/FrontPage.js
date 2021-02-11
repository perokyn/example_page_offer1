import React, { useState, useEffect } from 'react'
import PropertyList from '../components/PorpertyList'
import postStore from "../stores/postStore";
import { getProperties } from "../actions/postActions";
import DropDownMenu from '../components/DropDownMenu'
import main from '../Assets/main.jpeg'
import Footer from '../components/Footer'
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import {withRouter} from 'react-router-dom'
import ChatSideBar from '../components/ChatSideBar'





const FrontPage = () => {
    //===========REMEMBER WINDOW height is passed dwon from here to psition chat window to lower right corner

    const City = React.createRef()
    const Price = React.createRef()
    const Bedroom = React.createRef()

    const filterData = [

        {
            city: 'San Diego',
            bath: '4',
            price: '520000'
        },

        {
            city: 'National City',
            bath: '3',
            price: '649999'
        },
        {
            city: 'Chula Vista',
            bath: '3 +',
            price: 'over 100000'
        }


    ]


    const [properties, setProperties] = useState(postStore.getProperties());
    const [filter, setFilter] = useState({
        filtering: {
            city: '',
            bath: '',
            price: ''

        }

    })


    const[openSideBar, setOpenChatSideBar]=useState(false)

    

    useEffect(() => {
        
       

        postStore.addChangeListener(onChange);

        if (postStore.getProperties().length === 0) getProperties();
        return () => postStore.removeChangeListener(onChange);

       

    }, []);
    

    function onChange() {
        setProperties(postStore.getProperties());

    }

  


    const filterProperties = (e) => {
        let priceFilter = parseInt(Price.current.value)
        let cityFilter = City.current.value
        let bedFilter = parseInt(Bedroom.current.value)



        setFilter({
            ...filter, filtering: {
                price: priceFilter,
                city: cityFilter
            }
        })


    }

    const clearFilter = () => {

        getProperties()

    }



    const applyFilter = () => {


        let filterCity = properties.filter(propertyData => propertyData.property.address.city === filter.filtering.city)
        //let filterPrice = properties.filter(propertyData => propertyData.price === filter.filtering.price)

        setProperties(filterCity);

    }

    const [searchMenu, setSearch] = useState(false)
    //use this for top side menu transition fade in background
    //const hidden='absolute top-8'
    //const active='absolute top-8 transform translate-y-full  transition ease-in duration-700 p-3 flex flex-col bg-white sm:hidden '



    const hidden = 'hidden'
    const active = 'p-3 z-10 flex flex-col bg-white sm:hidden '

    //=====open chat side bar===========//

    function openChatSideBar(){
  console.log("Set Open Chat Side Bar Called!!")
        setOpenChatSideBar(!openSideBar)

    }


    return (
        <>

          { openSideBar?
          <ChatSideBar property={properties}/>:null}
                <img alt='property' src={main}></img>

             


            <div className='hidden sm:block sticky top-0 z-10 mx-auto sm:flex  p-3 sm:justify-around bg-white'>
                <div> <span className='text-gray-800 mr-2 font-semibold'> City</span> < DropDownMenu defaultValue={'select City'} option={'city'} optionValues={filterData} width={'w-1/4'}
                    handleChange={e => filterProperties(e)}
                    ref={City} />
                </div>
                <div> <span className='text-gray-800 mr-2 font-semibold'>Price</span>< DropDownMenu defaultValue={'select Price'} option={'price'} optionValues={filterData} width={'w-1/4'}
                    handleChange={e => filterProperties(e)}
                    ref={Price} />
                </div>

                <div> <span className='text-gray-800 mr-2 font-semibold'>Bedroom</span>< DropDownMenu defaultValue={'select Bedroom'} option={'bath'} optionValues={filterData} width={'w-1/4'}
                    handleChange={e => filterProperties(e)}
                    ref={Bedroom} />

                </div>

                <div className=' flex flex-col sm:flex-row font-semibold'>
                    <button className=' m-3 p-2 sm:p-2 bg-gray-200 font-thin text-sm rounded-lg border border-2 border-gray-200
                hover:bg-gray-100' onClick={applyFilter}>search</button>

                    <p className='  sm:mt-6 pl-3 text-xs text-gray-600 hover:underline' onClick={clearFilter}>Clear search</p>
                </div>
            </div>

            <div className=' flex sm:hidden justify-between pr-6 sticky top-0 z-11 bg-white'>
                <div className='flex items-center ml-3 mt-2 mb-2 p-2 bg-gray-200 rounded-lg'
                    onClick={() => setSearch(!searchMenu)}>
                    <label>Find a property</label>
                    <AiOutlineSearch className='text-4xl ml-2' />
                </div>

                < AiOutlineMenu className='text-4xl mt-3' />
            </div>


            <div className={searchMenu ? active : hidden}>
                <hr />
                <div className='m-2'>
                    <span className='text-gray-800 mr-2 font-semibold'>City</span> < DropDownMenu defaultValue={'select City'} option={'city'} optionValues={filterData} width={'w-1/4'}
                        handleChange={e => filterProperties(e)}
                        ref={City} />
                </div>
                <div className='m-2'>
                    <span className='text-gray-800 mr-2 font-semibold'>Price</span>< DropDownMenu defaultValue={'select Price'} option={'price'} optionValues={filterData} width={'w-1/4'}
                        handleChange={e => filterProperties(e)}
                        ref={Price} />
                </div>
                <div className='m-2'>
                    <span className='text-gray-800 mr-2 font-semibold'>Beds</span>    < DropDownMenu defaultValue={'select Bedroom'} option={'bath'} optionValues={filterData} width={'w-1/4'}
                        handleChange={e => filterProperties(e)}
                        ref={Bedroom} />
                </div>
                <div className=' grid justify-items-stretch'>
                    <button className='m-3 p-2  bg-gray-200 font-thin text-sm rounded-lg border border-2 border-gray-200
                hover:bg-gray-300  transition ease-in duration-700' onClick={applyFilter}>search</button>

                    <p className=' justify-self-end pr-3 text-xs text-gray-600 hover:underline' onClick={clearFilter}>Clear search</p>
                </div>
            </div>

<div className='relative'>
            <PropertyList  handleChatSidebar={()=>openChatSideBar()} properties={properties} />
            </div>
            <Footer />
        </>

    )
}

export default withRouter (FrontPage)