import { useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from '../container/layout';
import { Login } from '../pages/login/login';
import { AuthContext } from '../contexts/AuthContext';
import { Groups } from '../pages/groups/groups';
import { Users } from '../pages/users/users';
import { Import } from '../pages/import/import';
import {Management} from '../pages/management/management';
import { Unit } from '../pages/unit/unit';
import { DetailUnit } from '../pages/detailUnit/detailUnit';
import { AdminConcept } from '@/pages/adminConcept/adminConcept';
import { BriefcaseAction } from '@/pages/briefcaseAction/briefcaseAction';
import { BillingConcept } from '@/pages/billingConcept/billingConcept';
import { Template } from '@/pages/templates/templates';
import { CreateTemplate } from '@/components/templates/createTemplate';
import { UsuryRate } from '@/pages/usuryRate/usuryRate';
import { Configuration } from '@/pages/configuration/configuration';
import { Information } from '@/pages/information/information';
import { MoneyLocation } from '@/pages/moneyLocation/moneyLocation';
import { AgreementTypes } from '@/pages/agreementTypes/agreementTypes';

function App() {

  const { isLogged } = useContext(AuthContext)
  
    return (
      <BrowserRouter basename={import.meta.env.DEV ? '/' : '/CollectPro/'}>
        <Routes>
          {isLogged ? (
            <Route path="/" element={<Layout />}>
              <Route path='/' element={<Groups/>} />
              <Route path="/units/:id" element={<Unit/>} />
              <Route path="/users" element={<Users/>} />
              <Route path="/import" element={<Import/>}/>
              <Route path="/management" element={<Management/>}/>
              <Route path="/detail/:id" element={<DetailUnit/>}/>
              <Route path="/adminConcept" element={<AdminConcept/>}/>
              <Route path='/briefcase' element={<BriefcaseAction/>} />
              <Route path='/billingConcept' element={<BillingConcept/>} />
              <Route path='/template' element={<Template/>} />
              <Route path='/template/create' element={<CreateTemplate/>} />
              <Route path='/usuryRate' element={<UsuryRate/>} />
              <Route path='/configuration' element={<Configuration/>} />
              <Route path='/information' element={<Information/>} />
              <Route path='/agreementTypes' element={<AgreementTypes/>} />
              <Route path='/moneyLocation' element={<MoneyLocation/>} />
            </Route>
          ) : (
            <Route path="/*" element={<Login />} />
          )}
        </Routes>
      </BrowserRouter>
    );
  }
  
  export default App
