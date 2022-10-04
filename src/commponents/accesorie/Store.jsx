import Offer from '../Offer';
import './css/store.css';
import '../css/bestseller.css';

// mui link

import AppsIcon from '@mui/icons-material/Apps';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import Slider from '@mui/material/Slider';
import * as React from 'react';
import Box from '@mui/material/Box';
import Products from './Products'
import Pagination from './Pagination'
// image
// import image from '../images/2_corousel.png';

// import media file
import { Item } from '../../media/Prodects'
import { useState } from 'react';
import { useEffect } from 'react';



const Store = () => {

    const [itemData, setItemDate] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(9);
    const lastPostIndex = currentPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;
    const currentPost = itemData.slice(firstPostIndex, lastPostIndex);
    useEffect(() => setItemDate(Item), []);


    return (
        <>
            <section className="store-product">
                <div className='store-heading'>
                    <p>Store</p>
                    <p>/</p>
                    <p>Accesories</p>
                </div>
                <div className="product-filter">
                    <div className='lf-sec'>
                        <div className='total-sec'>
                            <div className="table">
                                <div className='table_row'>
                                    <div className='col_cell brand'>ACCESORIES</div>
                                </div>
                                <div className="table_row">
                                    <button className='tr-btn'>
                                        <div className="col_cell">Apple Car</div>
                                        <div className="col_cell">2</div>
                                    </button>
                                </div>
                                <div className="table_row">
                                    <button className='tr-btn'>
                                        <div className="col_cell">Air port & wireless</div>
                                        <div className="col_cell">45</div>
                                    </button>
                                </div>
                                <div className="table_row">
                                    <button className='tr-btn'>
                                        <div className="col_cell">Cables & Docks</div>
                                        <div className="col_cell">14</div>
                                    </button>
                                </div>
                                <div className="table_row">
                                    <button className='tr-btn'>
                                        <div className="col_cell">Cases & Films</div>
                                        <div className="col_cell">15</div>
                                    </button>
                                </div>
                                <div className="table_row">
                                    <button className='tr-btn'>
                                        <div className="col_cell">Charging Devices</div>
                                        <div className="col_cell">54</div>
                                    </button>
                                </div>
                                <div className="table_row">
                                    <button className='tr-btn'>
                                        <div className="col_cell">Headphones</div>
                                        <div className="col_cell">99</div>
                                    </button>
                                </div>
                            </div>
                        </div>


                        <div className='price-filter' >
                            <div className='pf-title'>
                                <p>PRICE</p>
                            </div>
                            <div className='range-in-number'>
                                <div>
                                    Range:
                                </div>
                                <div>
                                    <span>$ 30.00 </span>
                                    <span> - </span>
                                    <span> $ 24.00 </span>
                                </div>
                            </div>
                            <div className='filter-range'>

                                <Box sx={{ width: 300 }}>
                                    <Slider
                                        getAriaLabel={() => 'Temperature range'}
                                        valueLabelDisplay="auto" defaultValue={[0, 100]}
                                    />
                                </Box>
                                {/* <input type="range" name="" id="" step={1} min={1} max={10} /> */}
                            </div>
                        </div>

                        <div className='pik-color' >
                            <div className='pc-title'>
                                <p>COLOR</p>
                            </div>
                            <div className='colors'>
                                <button className='color red'>

                                </button>
                                <button className='color blue'>

                                </button>
                                <button className='color black'>

                                </button>
                                <button className='color yellow'>

                                </button>
                                <button className='color golden'>

                                </button>
                            </div>
                        </div>
                        <div className='total-sec'>
                            <div className="table">
                                <div className='table_row'>
                                    <div className='col_cell brand'>BRAND</div>
                                </div>
                                <div className="table_row">
                                    <button className='tr-btn'>
                                        <div className="col_cell">Apple</div>
                                        <div className="col_cell">99</div>
                                    </button>
                                </div>
                                <div className="table_row">
                                    <button className='tr-btn'>
                                        <div className="col_cell">Samsung</div>
                                        <div className="col_cell">14</div>
                                    </button>
                                </div>
                                <div className="table_row">
                                    <button className='tr-btn'>
                                        <div className="col_cell">Siemens</div>
                                        <div className="col_cell">40</div>
                                    </button>

                                </div>
                                <div className="table_row">
                                    <button className='tr-btn'>
                                        <div className="col_cell">LG</div>
                                        <div className="col_cell">45</div>
                                    </button>

                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='right-side'>

                        <Offer margin='0' overflow='hidden' height='325' />


                        <div className='filter-sec'>
                            <div className='sortlistitem'>
                                <div>
                                    <p>13 item</p>
                                </div>
                                <div>
                                    <span >Sort By: </span>
                                    <select className='selectitem' name="itemName" id="itemnames">
                                        <option value="1">Name</option>
                                        <option value="2">Phone</option>
                                        <option value="2">watch</option>
                                    </select>
                                </div>
                                <div>
                                    <span>Show </span>
                                    <select className='selectitem' name="itemName" id="itemnumber">
                                        <option value="1">12</option>
                                        <option value="2">34</option>
                                        <option value="2">23</option>
                                    </select>
                                </div>
                            </div>
                            <div className='appicon'>
                                <button className='app-btn'>
                                    <AppsIcon sx={{ fontSize: 25 }} />
                                </button>
                                <button className='app-btn' >
                                    <ListOutlinedIcon sx={{ fontSize: 35 }} />
                                </button>
                            </div>

                        </div>

                        <Products Products={currentPost} />


                        <Pagination
                            totalPages={itemData.length} postPerPage={postPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}
                        />

                    </div>
                </div>

                <div className="container-sec">

                </div>
            </section>
        </>
    )
}
export default Store;