import React, { useState, useEffect } from 'react'
import PropertyList from '../components/PorpertyList'
import postStore from "../stores/postStore";
import { getProperties } from "../actions/postActions";
import DropDownMenu from '../components/DropDownMenu'
import main from '../Assets/main.jpeg'
import Footer from '../components/Footer'


const FrontPage = () => {

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


    return (
        <>


            <img alt='property' src={main}></img>

            <div className='sticky top-0 z-10 mx-auto sm:flex  p-3 sm:justify-around bg-white'>
                < DropDownMenu defaultValue={'select City'} option={'city'} optionValues={filterData} width={'w-1/4'}
                    handleChange={e => filterProperties(e)}
                    ref={City} />
                < DropDownMenu defaultValue={'select Price'} option={'price'} optionValues={filterData} width={'w-1/4'}
                    handleChange={e => filterProperties(e)}
                    ref={Price} />
                < DropDownMenu defaultValue={'select Bedroom'} option={'bath'} optionValues={filterData} width={'w-1/4'}
                    handleChange={e => filterProperties(e)}
                    ref={Bedroom} />
                   
                   <div className=' flex flex-col sm:flex-row'>
                <button className=' m-3 p-2 sm:p-2 bg-gray-200 font-thin text-sm rounded-lg border border-2 border-gray-200
                hover:bg-gray-100' onClick={applyFilter}>search</button>

                <p className='  sm:mt-6 pl-3 text-xs text-gray-600 hover:underline' onClick={clearFilter}>Clear search</p>
                </div>
            </div>




            <PropertyList properties={properties} />
<Footer/>
        </>

    )
}

export default FrontPage