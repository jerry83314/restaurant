import { useMemo, useState, useEffect, useCallback } from "react"
import DataTable from "./components/DataTable";

export default function UseMemo() {
  const sampleData = [
    {
      id: 1,
      title: '多色餅乾',
      imageUrl:
        'https://images.unsplash.com/photo-1576717585968-8ea8166b89b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      price: 80,
    },
    {
      id: 2,
      title: '綠色馬卡龍',
      imageUrl:
        'https://images.unsplash.com/photo-1623066463831-3f7f6762734d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1135&q=80',
      price: 120,
    },
    {
      id: 3,
      title: '甜蜜左擁右抱',
      imageUrl:
        'https://images.unsplash.com/photo-1558312657-b2dead03d494?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      price: 200,
    },
    {
      id: 4,
      title: '巧克力心連心',
      imageUrl:
        'https://images.unsplash.com/photo-1606913084603-3e7702b01627?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      price: 160,
    },
    {
      id: 5,
      title: '粉係馬卡龍',
      imageUrl:
        'https://images.unsplash.com/photo-1612201142855-7873bc1661b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      price: 120,
    },
  ];

  const [products, setProducts] = useState(sampleData);
  const [ascending, setAscending] = useState(true);
  const [search, setSearch] = useState('');
  const [text, setText] = useState('');
  const [items, setItems] = useState([]);

  const handleClick = useCallback((e) => {
    console.log('handleClick 被觸發了');
    // 確認是否被勾選
    if(e.target.checked) {
      setItems([...items, e.target.value]);
    } else {
      setItems(items.filter((item) => item !== e.target.value ))
    }
  }, [items]);

  const filterProducts = useMemo(() => {
    // // 搜尋功能
    // const filter = [...products].filter((product) => product.title.match(search));

    // // 排序功能
    // return filter.sort((a, b) => {
    //   return ascending ? a.price - b.price : b.price - a.price
    // });

    // 更精簡的寫法
    return [...products]
      .filter((product) => product.title.match(search))
      .sort((a, b) => ascending ? a.price - b.price : b.price - a.price);
  }, [search, ascending]);

  return (
    <>
      <p>這是 useMemo hook 頁面 </p>
      <input type="text" value={text} onChange={(e) => {
        setText(e.target.value)
      }} />
      <br/>
      升降冪：<input type="checkbox" checked={ascending} onChange={(e) => {
        setAscending(e.target.checked)
      }}/>
      <br/>
      搜尋：<input type="text" value={search} onChange={(e) => {
        setSearch(e.target.value)
      }} />
      <p>勾選的項目：{items}</p>
      <DataTable filterProducts={filterProducts} handleClick={handleClick} />
    </>
  )
}