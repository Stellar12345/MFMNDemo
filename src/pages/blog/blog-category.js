import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BlogCategory = () => {
  const [data, setData] = useState(null);
  const baseurl = 'https://mfmn.stellarsolutionsindia.com/admin/';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(baseurl + 'Api/blog/get_category');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <option value="All">All Genre</option>
       {data && data.Cat && data.Cat.map((item, i) => (
        <option key={i} value={item.category_name} className="py-2">{item.category_name}</option>
      ))}
      </>
  );
};

export default BlogCategory;
