import React from 'react'

export default function BtnAddCourse() {
    const loaiND = true;
  return loaiND ? (
    <button className='px-4 py-2 bg-green-600 text-white my-2 rounded'>Thêm khoá học</button>
  ) : <></>
}
