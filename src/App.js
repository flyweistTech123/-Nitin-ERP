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
import CoursefeesStructure from './Pages/Setting/CoursefeesStructure';
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
import PettyCashPayment from './Pages/PettyCash Payment/PettyCashPayment';
import Whatsapp from './Pages/WHATSAPP/Whatsapp';
import Telegram from './Pages/Telegram/Telegram';
import VoiceCall from './Pages/Voice Call/VoiceCall';
import Zoommeeting from './Pages/Zoom meeting Page/Zoommeeting';
import Email from './Pages/Email Page/Email';
import Documents from './Pages/Documents/Documents';
import DailyReportTemplate from './Pages/Daily Report Template/DailyReportTemplate';
import CallRecordingStorage from './Pages/Call Recording Storage/CallRecordingStorage';
import ITReportingTemplate from './Pages/IT Reporting Template/ITReportingTemplate';
import CompanyStructure from './Pages/Company Structure/CompanyStructure';
import PermissionAccess from './Pages/Permission Access/PermissionAccess';
import AccessPermission from './Pages/Permission Access/AccessPermission';
import ManagePermissionAccess from './Pages/Permission Access/ManagePermissionAccess';
import ReferenceFormData from './Pages/Reference Form Data/ReferenceFormData';
import BirthdayWishes from './Pages/Setting/BirthdayWishes';
import WorkAnniversory from './Pages/Setting/WorkAnniversory';
import TelegramAPI from './Pages/Setting/TelegramAPI';
import EasebuzzAPI from './Pages/Setting/EasebuzzAPI';
import CCAvenueAPI from './Pages/Setting/CCAvenueAPI';
import PaytmGateway from './Pages/Setting/PaytmGateway';
import Keka from './Pages/Setting/Keka';
import WatiApi from './Pages/Setting/WatiApi';
import InterktAPI from './Pages/Setting/InterktAPI';
import KIT19 from './Pages/Setting/KIT19';
import PettyCashTemplate from './Pages/Setting/PettyCashTemplate';
import CourierSectionTemplate from './Pages/Setting/CourierSectionTemplate';
import Waticouriersectiontemplate from './Pages/Setting/Waticouriersectiontemplate';
import Intakeouriersectiontemplate from './Pages/Setting/Intakeouriersectiontemplate';
import PendingDocumentListTemplate from './Pages/Setting/PendingDocumentListTemplate';
import SettingEmailTemplate from './Pages/Setting/SettingEmailTemplate';
import FONADAAPI from './Pages/Setting/FONADAAPI';
import ERPSettings from './Pages/Setting/ERPSettings';
import PaymentTypeMode from './Pages/Setting/PaymentTypeMode';
import ForInternalpayment from './Pages/Setting/ForInternalpayment';
import ForPublicPayment from './Pages/Setting/ForPublicPayment';
import CallyzerAPI from './Pages/Setting/CallyzerAPI';
import FeeReceiptFormat from './Pages/Setting/FeeReceiptFormat';
import StudentEditTemplate from './Pages/Setting/StudentEditTemplate';
import InternalEditTemplate from './Pages/Setting/InternalEditTemplate';
import SettingEditEmailTemplate from './Pages/Setting/SettingEditEmailTemplate';
import PaymentNow from './Pages/PaymentNow/PaymentNow';
import PaymentDeteails from './Pages/PaymentNow/PaymentDeteails';
import EasebuzzPayment from './Pages/PaymentNow/EasebuzzPayment';
import General from './Pages/General/General';
import Task from './Pages/Task/Task';
import Calender from './Pages/Calender/Calender';
import Drive from './Pages/Drive/Drive';
import WorkReport from './Pages/Work Report/WorkReport';
import Admission_Details from './Pages/EditProfile/Admission_Details';
import Payment_section_Editprofile from './Pages/EditProfile/Payment_section_Editprofile';
import Personal_Details from './Pages/EditProfile/Personal_Details';
import Contact_Details from './Pages/EditProfile/Contact_Details';
import Guardian_Details from './Pages/EditProfile/Guardian_Details';
import Certificate from './Pages/EditProfile/Certificate';
import Education_Details from './Pages/EditProfile/Education_Details';
import Automatic2FeeStructure from './Pages/EditProfile/Automatic2Fee _Structure';
import CreateTask from './Pages/Task/CreateTask';
import CreateEvent from './Pages/Calender/CreateEvent';
import GeneralAdminMode from './Pages/General/GeneralAdminMode';
import ActionWatiTemplate from './Pages/Template/Whatsapp Template/ActionWatiTemplate';
import ActionInteraktTemplate from './Pages/Template/Whatsapp Template/ActionInteraktTemplate';
import ActionWatiTemplateselect from './Pages/Template/Whatsapp Template/ActionWatiTemplateselect';
import AddTelegaramTemplate from './Pages/Template/AddTelegaramTemplate';
import ConnectTelegaramTemplate from './Pages/Template/ConnectTelegaramTemplate';
import AddSMSTemplate from './Pages/Template/AddSMSTemplate';
import ConnectSMSTemplate from './Pages/Template/ConnectSMSTemplate';
import AddEmailTemplate from './Pages/Template/AddEmailTemplate';
// import Whatsappsection from './Pages/WHATSAPP/Whatsappsection';

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
          <Route path="/coursefeesstructure" element={<CoursefeesStructure />} />
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
          <Route path="/pettycashpayment" element={<PettyCashPayment />} />
          <Route path="/whatsapp" element={<Whatsapp />} />
          <Route path="/telegram" element={<Telegram />} />
          <Route path="/voicecall" element={<VoiceCall />} />
          <Route path="/zoommeeting" element={<Zoommeeting />} />
          <Route path="/email" element={<Email />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/dailyReporttemplate" element={<DailyReportTemplate />} />
          <Route path="/callrecordingstorage" element={<CallRecordingStorage />} />
          <Route path="/itreportingtemplate" element={<ITReportingTemplate />} />
          <Route path="/companystructure" element={<CompanyStructure />} />
          <Route path="/permissionaccess" element={<PermissionAccess />} />
          <Route path="/accesspermission" element={<AccessPermission />} />
          <Route path="/managepermissionaccess" element={<ManagePermissionAccess />} />
          <Route path="/referenceformdata" element={<ReferenceFormData />} />
          <Route path="/birthdaywishes" element={<BirthdayWishes />} />
          <Route path="/workanniversory" element={<WorkAnniversory />} />
          <Route path="/telegramAPI" element={<TelegramAPI />} />
          <Route path="/easebuzzAPI" element={<EasebuzzAPI />} />
          <Route path="/ccavenueAPI" element={<CCAvenueAPI />} />
          <Route path="/paytmgateway" element={<PaytmGateway />} />
          <Route path="/keka" element={<Keka />} />
          <Route path="/watiApi" element={<WatiApi />} />
          <Route path="/interktAPI" element={<InterktAPI />} />
          <Route path="/kit19" element={<KIT19 />} />
          <Route path="/pettycashtemplate" element={<PettyCashTemplate />} />
          <Route path="/couriersectiontemplate" element={<CourierSectionTemplate />} />
          <Route path="/waticouriersectiontemplate" element={<Waticouriersectiontemplate />} />
          <Route path="/intakeouriersectiontemplate" element={<Intakeouriersectiontemplate />} />
          <Route path="/pendingdocumentLlisttemplate" element={<PendingDocumentListTemplate />} />
          <Route path="/settingemailtemplate" element={<SettingEmailTemplate />} />
          <Route path="/fonadaapi" element={<FONADAAPI />} />
          <Route path="/erpaettings" element={<ERPSettings />} />
          <Route path="/paymenttypemode" element={<PaymentTypeMode />} />
          <Route path="/forinternalpayment" element={<ForInternalpayment />} />
          <Route path="/forpublicPayment" element={<ForPublicPayment />} />
          <Route path="/callyzerapi" element={<CallyzerAPI />} />
          <Route path="/feereceiptformat" element={<FeeReceiptFormat />} />
          <Route path="/studentedittemplate" element={<StudentEditTemplate />} />
          <Route path="/Internaledittemplate" element={<InternalEditTemplate />} />
          <Route path="/settingEditemailtemplate" element={<SettingEditEmailTemplate />} />
          <Route path="/paymentnow" element={<PaymentNow />} />
          <Route path="/paymentdetails" element={<PaymentDeteails />} />
          <Route path="/easebuzzpayment" element={<EasebuzzPayment />} />
          <Route path="/general" element={<General />} />
          <Route path="/task" element={<Task />} />
          <Route path="/calender" element={<Calender />} />
          <Route path="/drive" element={<Drive />} />
          <Route path="/workreport" element={<WorkReport />} />
          <Route path="/admission_details" element={<Admission_Details />} />
          <Route path="/payment_section" element={<Payment_section_Editprofile />} />
          <Route path="/personal_details" element={<Personal_Details />} />
          <Route path="/contact_details" element={<Contact_Details />} />
          <Route path="/guardian_details" element={<Guardian_Details />} />
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/education_details" element={<Education_Details />} />
          <Route path="/automatic2feestructure" element={<Automatic2FeeStructure />} />
          <Route path="/createtask" element={<CreateTask />} />
          <Route path="/createevent" element={<CreateEvent />} />
          <Route path="/generalAdminMode" element={<GeneralAdminMode />} />
          <Route path="/actionWatiTemplate" element={<ActionWatiTemplate />} />
          <Route path="/actionInteraktTemplate" element={<ActionInteraktTemplate />} />
          <Route path="/actionWatiTemplateselect" element={<ActionWatiTemplateselect />} />
          <Route path="/addtelegaramtemplate" element={<AddTelegaramTemplate />} />
          <Route path="/connectTelegaramTemplate" element={<ConnectTelegaramTemplate />} />
          <Route path="/addsmstemplate" element={<AddSMSTemplate />} />
          <Route path="/connectsmstemplate" element={<ConnectSMSTemplate />} />
          <Route path="/addemailtemplate" element={<AddEmailTemplate />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
