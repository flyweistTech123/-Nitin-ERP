import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Dashboard from './Pages/Dashboard/Dashboard';
import Admission from './Pages/Admission/Admission';
import Service from './Pages/Service/Service';
import Backend from './Pages/Backend/Backend';
import PendingOnlinePayments from './Pages/Pending Online Payments/PendingOnlinePayments';
import PaymentReceived from './Pages/Payment Received/PaymentReceived';
import RefundCancel from './Pages/RefundCancel/RefundCancel';
import PDCSection from './Pages/PDC Section/PDCSection';
import ExamAttendanceStatus from './Pages/Exam Attendance Status/ExamAttendanceStatus';
import Results from './Pages/Results/Results';
import Template from './Pages/Template/Template';
import TelegramTemplate from './Pages/Template/TelegramTemplate';
import EmailTemplate from './Pages/Template/EmailTemplate';
import SMSTemplate from './Pages/Template/SMSTemplate';
import WatiTemplate from './Pages/Template/Whatsapp Template/WatiTemplate';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/service" element={<Service />} />
          <Route path="/backend" element={<Backend />} />
          <Route path="/pendingonlinepayments" element={<PendingOnlinePayments />} />
          <Route path="/paymentreceived" element={<PaymentReceived />} />
          <Route path="/refundcancel" element={<RefundCancel />} />
          <Route path="/pdc" element={<PDCSection />} />
          <Route path="/examattendancestatus" element={<ExamAttendanceStatus />} />
          <Route path="/results" element={<Results />} />
          <Route path="/template" element={<Template />} />
          <Route path="/telegramtemplate" element={<TelegramTemplate />} />
          <Route path="/emailtemplate" element={<EmailTemplate />} />
          <Route path="/smstemplate" element={<SMSTemplate />} />
          <Route path="/watitemplate" element={<WatiTemplate />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
