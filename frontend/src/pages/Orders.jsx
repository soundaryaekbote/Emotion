import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import axios from 'axios';
import { toast } from 'react-toastify'; // 👈 Added toast for error messages

const Orders = () => {

  const { backendUrl, token , currency} = useContext(ShopContext);

  const [orderData,setorderData] = useState([])

  const loadOrderData = async () => {
    try {
      if (!token) {
        // Handle case where user is not logged in (token is null/empty)
        setorderData([]);
        return; 
      }

      // 🎯 FIX: Corrected the headers object to use the standard Authorization: Bearer <token> format
      const config = {
        headers: {
          Authorization: `Bearer ${token}` 
        }
      };

      const response = await axios.post(backendUrl + '/api/order/userorders', {}, config); // 👈 Passing the correct headers

      if (response.data.success) {
        let allOrdersItem = []
        response.data.orders.map((order)=>{
          order.items.map((item)=>{
            item['status'] = order.status
            item['payment'] = order.payment
            item['paymentMethod'] = order.paymentMethod
            item['date'] = order.date
            allOrdersItem.push(item)
          })
        })
        setorderData(allOrdersItem.reverse())
      } else {
         // Show error message if the server responds with success: false
        toast.error(response.data.message || "Failed to load orders."); 
      }
      
    } catch (error) {
      console.log(error);
       // Show toast error message, especially for the 401 Unauthorized case
       if (error.response && error.response.status === 401) {
          toast.error("Unauthorized: Please log in again to view orders.");
       } else {
          toast.error("An error occurred while fetching orders.");
       }
    }
  }

  useEffect(()=>{
    loadOrderData()
  },[token])

  // Display a message if no token is present
  if (!token) {
    return (
      <div className='pt-16 min-h-[50vh] flex flex-col items-center'>
        <Title text1={'MY'} text2={'ORDERS'}/>
        <p className='mt-8 text-lg text-red-500'>Please log in to view your orders.</p>
      </div>
    )
  }

  return (
    <div className='border-t pt-16 min-h-[80vh]'>

      <div className='text-2xl'>
        <Title text1={'MY'} text2={'ORDERS'}/>
      </div>

      <div>
        {
          orderData.length === 0 
            ? <p className='text-center text-gray-500 mt-10'>No orders found.</p>
            : orderData.map((item,index) => (
              <div key={index} className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
                <div className='flex items-start gap-6 text-sm'>
                  <img className='w-16 sm:w-20' src={item.image[0]} alt="" />
                  <div>
                    <p className='sm:text-base font-medium'>{item.name}</p>
                    <div className='flex items-center gap-3 mt-1 text-base text-gray-700'>
                      <p>{currency}{item.price}</p>
                      <p>Quantity: {item.quantity}</p>
                      <p>Size: {item.size}</p>
                    </div>
                    <p className='mt-1'>Date: <span className=' text-gray-400'>{new Date(item.date).toDateString()}</span></p>
                    <p className='mt-1'>Payment: <span className=' text-gray-400'>{item.paymentMethod}</span></p>
                  </div>
                </div>
                <div className='md:w-1/2 flex justify-between'>
                  <div className='flex items-center gap-2'>
                    <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                    <p className='text-sm md:text-base'>{item.status}</p>
                  </div>
                  <button onClick={loadOrderData} className='border px-4 py-2 text-sm font-medium rounded-sm'>Track Order</button>
                </div>
              </div>
            ))
        }
      </div>
    </div>
  )
}

export default Orders