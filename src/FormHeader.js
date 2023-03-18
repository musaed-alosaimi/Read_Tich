import React from 'react'

function FormHeader({currentPage}) {


    let pageCompletedStyle = {backgroundColor: "#00A3E0", color: "#FFF"}

    return (
        <ul className="formPath">
            <li>
                <div className="text">الإعدادات</div>
                <div className="circle" style={currentPage >= 1 ? pageCompletedStyle : {}}>1</div>
            </li>
            <li>
                <div className="text">بيانات المشروع</div>
                <div className="circle" style={currentPage >= 2 ? pageCompletedStyle : {}}>2</div>
            </li>
            <li>
                <div className="text">الدراسة التمهيدية </div>
                <div className="circle" style={currentPage >= 3 ? pageCompletedStyle : {}}>3</div>
            </li>
            <li>
                <div className="text">الدراسة السوقية</div>
                <div className="circle" style={currentPage >= 4 ? pageCompletedStyle : {}}>4</div>
            </li>

        </ul>
    )
}

export default FormHeader