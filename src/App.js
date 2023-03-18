import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'react-bootstrap';
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Switch,
  Routes,
  Route,
  useNavigate
} from "react-router-dom";

import logo from "./images/Logo.jpeg"

import bottomImage from "./images/bottomImage.jpeg"

function App() {

  const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">

        <div>
          <Button variant="success" className="homeButton" onClick={() => navigate("/")}>
            الرئيسة
          </Button>
        </div>
        <div className='headerTitle'>
          Saudi Chat GPT
        </div>

      </header>


      <div className="Container">

        <div className='boxContainer'>



          <div className='mainBox'>

            <h2>منصة ريادتك</h2>
            <p style={{ margin: 0, }}>نقدملك افضل الخيارات في رحلتك الريادية في المملكة العربية السعودية</p>
            <div className="whiteBreakLine" ></div>
            <p>
              منصة جدوى تك هي منصة تأخذك من نموذج العمل إلى المنتج الأولي إلى دراسة الجدوى إلى خطة العمل إنهاءً بالعرض الاستثماري، باستخدام تقنيات الذكاء الاصطناعي وتحليل البيانات ذات العلاقة في المملكة العربية السعودية مع تقديم خدمة الاستشارات الشخصية لتصل مخرجات دراستك لأفضل صورة
            </p>


            <div className='mainActionButtons'>

              <Link to="/FeasibilityInfo">
                <Button className="startButton">
                  إبدأ
                </Button>
              </Link>

              <Link to="/FeasibilityInfo">
                <Button className="knowMoreButton">
                  إعرف المزيد
                </Button>
              </Link>

            </div>

          </div>
        </div>


        <div className="mainServiceCotnainer">

          <h1>إبدأ رحلتك في ريادة الأعمال من نموذج العمل إلى العرض الاستثماري في <span style={{ color: 'green' }}>المملكة العربية السعودية</span></h1>

        </div>

        <div className="services">
          <div className='service'>
            <div className='seriveTitle'>نموذج عمل تجاري</div>
            <div className="servicesPackages">
              <div className='servicePackageBox'>
                <div>سمارت منوذج عمل تجاري</div>
                <div className='statusBox'>قريبا ..</div>
              </div>
              <div className='servicePackageBox'>
                <div>سمارت نموذج العمل التجاري تيم</div>
                <div className='statusBox'>قريبا ..</div>
              </div>

              <div className='servicePackageBox'>
                <div>انضم لنا كمستشار نموذج العمل التجاري</div>
                <div className='statusBox'>قريبا ..</div>
              </div>

            </div>
          </div>

          <div className='service'>
            <div className='seriveTitle'>MVP</div>
            <div className="servicesPackages">
              <div className='servicePackageBox'>
                <div>سمارت MVP</div>
                <div className='statusBox'>قريبا ..</div>
              </div>
              <div className='servicePackageBox'>
                <div>سمارت MVP تيم</div>
                <div className='statusBox'>قريبا ..</div>
              </div>
              <div className='servicePackageBox'>
                <div>انضم لنا كمستشار MVP</div>
                <div className='statusBox'>قريبا ..</div>
              </div>
            </div>
          </div>

          <div className='service'>
            <div className='seriveTitle'>دراسة الجدوى</div>
            <div className="servicesPackages">
              <div className='servicePackageBox'>
                <div>سمارت الجدوى</div>
                <Link to="/FeasibilityInfo">
                  <Button className='statusBox' style={{ background: "green" }}>إبدأ الآن</Button>
                </Link>
              </div>
              <div className='servicePackageBox'>
                <div>سمارت جدوى تيم</div>
                <div className='statusBox'>قريبا ..</div>
              </div>

              <div className='servicePackageBox'>
                <div>انصم لنا كمستشار في دراسة الجدوى</div>
                <div className='statusBox'>قريبا ..</div>
              </div>
            </div>
          </div>

          <div className='service'>
            <div className='seriveTitle'>خطة العمل</div>
            <div className="servicesPackages">
              <div className='servicePackageBox'>
                <div>سمارت خطة العمل</div>
                <div className='statusBox'>قريبا ..</div>
              </div>
              <div className='servicePackageBox'>
                <div>سمارت خطة العمل تيم</div>
                <div className='statusBox'>قريبا ..</div>
              </div>
              <div className='servicePackageBox'>
                <div>انصم لنا كمستشار في خطة العمل</div>
                <div className='statusBox'>قريبا ..</div>
              </div>
            </div>
          </div>

          <div className='service'>
            <div className='seriveTitle'>العرض الاستثماري</div>
            <div className="servicesPackages">
              <div className='servicePackageBox'>
                <div>سمارت خطة العرض الاستثماري</div>
                <div className='statusBox'>قريبا ..</div>
              </div>
              <div className='servicePackageBox'>
                <div>سمارت العرض الاستثماري</div>
                <div className='statusBox'>قريبا ..</div>
              </div>
              <div className='servicePackageBox'>
                <div>انضم لنا كمستشار في العرض الاستثماري</div>
                <div className='statusBox'>قريبا ..</div>
              </div>
            </div>
          </div>

        </div>

        <div className='bottomImage'></div>

      </div>
    </div>
  );
}

export default App;
