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
import InteraktTemplate from './Pages/Template/Whatsapp Template/InteraktTemplate';
import Automation from './Pages/Automation Logs/Automation';
import TelegramAutomation from './Pages/Automation Logs/TelegramAutomation';
import EmailAutomation from './Pages/Automation Logs/EmailAutomation';
import InteraktAutomation from './Pages/Automation Logs/InteraktAutomation';
import MeetingAutomation from './Pages/Automation Logs/MeetingAutomation';
import SMSAutomation from './Pages/Automation Logs/SMSAutomation';
import WatiAutomation from './Pages/Automation Logs/WatiAutomation';
import ZoomAutomation from './Pages/Automation Logs/ZoomAutomation';
import ITReport from './Pages/IT Report/ITReport';
import ITTargetReport from './Pages/IT Target Report/ITTargetReport';
import ITTargetAnalysis from './Pages/IT Target Analysis/ITTargetAnalysis';
import CallRecordingAnalysis from './Pages/Call Recording Analysis/CallRecordingAnalysis';
import SalesTarget from './Pages/Sales Target/SalesTarget';
import CRM from './Pages/CRM/CRM';
import Employees from './Pages/Employees/Employees';
import University from './Pages/Setting/University';
import Courses from './Pages/Setting/Courses';
import Specialization from './Pages/Setting/Specialization';
import Subject from './Pages/Setting/Subject';
import BankAccount from './Pages/Setting/BankAccount';
import StudyMedium from './Pages/Setting/StudyMedium';
import CourseFeesHead from './Pages/Setting/CourseFeesHead';
import AutoBackup from './Pages/Setting/AutoBackup';
import PDCFollowUpStatus from './Pages/Setting/PDCFollowUpStatus';
import ExpenseType from './Pages/Setting/ExpenseType';
import IdleTime from './Pages/Setting/IdleTime';
import PendingdocumentList from './Pages/Setting/PendingdocumentList';
import CourierSection from './Pages/Setting/CourierSection';
import StudentRequestType from './Pages/Setting/StudentRequestType';
import StudentComplaintType from './Pages/Setting/StudentComplaintType';
import AdmissionConfirmStatus from './Pages/Setting/AdmissionConfirmStatus';
import LogInHistory from './Pages/Log In History/LogInHistory';
import Attendee from './Pages/Attendees/Attendee';
import Expense from './Pages/Expense/Expense';

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
          <Route path="/interakttemplate" element={<InteraktTemplate />} />
          <Route path="/automationlogs" element={<Automation />} />
          <Route path="/telegramautomation" element={<TelegramAutomation />} />
          <Route path="/emailautomation" element={<EmailAutomation />} />
          <Route path="/interaktautomation" element={<InteraktAutomation />} />
          <Route path="/meetingautomation" element={<MeetingAutomation />} />
          <Route path="/smsautomation" element={<SMSAutomation />} />
          <Route path="/watiautomation" element={<WatiAutomation />} />
          <Route path="/zoomautomation" element={<ZoomAutomation />} />
          <Route path="/itreport" element={<ITReport />} />
          <Route path="/ittargetreport" element={<ITTargetReport />} />
          <Route path="/ittargetanalysis" element={<ITTargetAnalysis />} />
          <Route path="/callrecordinganalysis" element={<CallRecordingAnalysis />} />
          <Route path="/salestarget" element={<SalesTarget />} />
          <Route path="/crm" element={<CRM />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/university" element={<University />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/specialization" element={<Specialization />} />
          <Route path="/subject" element={<Subject />} />
          <Route path="/bankaccount" element={<BankAccount />} />
          <Route path="/studymedium" element={<StudyMedium />} />
          <Route path="/coursefeeshead" element={<CourseFeesHead />} />
          <Route path="/autobackup" element={<AutoBackup />} />
          <Route path="/pdcfollowupStatus" element={<PDCFollowUpStatus />} />
          <Route path="/expensetype" element={<ExpenseType />} />
          <Route path="/idletime" element={<IdleTime />} />
          <Route path="/pendingdocumentlist" element={<PendingdocumentList />} />
          <Route path="/couriersection" element={<CourierSection />} />
          <Route path="/studentrequesttype" element={<StudentRequestType />} />
          <Route path="/studentcomplainttype" element={<StudentComplaintType />} />
          <Route path="/admissionconfirmstatus" element={<AdmissionConfirmStatus />} />
          <Route path="/loginhistory" element={<LogInHistory />} />
          <Route path="/attendee" element={<Attendee />} />
          <Route path="/expense" element={<Expense />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
