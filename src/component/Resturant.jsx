import React, { useState } from 'react'
import Menu from './MenuApp'
import MenuCard from './MenuCard'
import NavMenu from './NavMenu'
function Resturant() {
    const [menuData, setMenuData] = useState(Menu)
    const filterItem = (category) => {
        const updateList = Menu.filter((curEle) => {
            return curEle.category === category
        });
        setMenuData(updateList)
    }
    return (
        <>

            <div className='container-fluid mt-4'>
                <div className="row">
                    <div className="col-sm-2 bg-light">
                        <h1>Dashboard</h1>
                        <button type="button" className="btn m-3" onClick={() => filterItem('Breakfast')}>Breakfast</button><br></br>
                        <button type="button" className="btn ms-3 me-3" onClick={() => filterItem('Lunch')}>Lunch</button><br /><br />
                        <button type="button" className="btn  ms-3 me-3" onClick={() => filterItem('Dinner')}>Dinner</button>
                    </div>
                    <div className="col-sm-10">
                        <NavMenu />

                        < MenuCard menuData={menuData} />
                    </div>
                </div>
            </div>

        </>
    )
}
export default Resturant;