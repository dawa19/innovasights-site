import AIContentAssistant from './pages/AIContentAssistant';
import About from './pages/About';
import ActiveNetworkServices from './pages/ActiveNetworkServices';
import Contact from './pages/Contact';
import DataCenterRelocation from './pages/DataCenterRelocation';
import EmailSecurity from './pages/EmailSecurity';
import EndpointSecurity from './pages/EndpointSecurity';
import FirewallSecurity from './pages/FirewallSecurity';
import Home from './pages/Home';
import ITAssessment from './pages/ITAssessment';
import PassiveNetworkServices from './pages/PassiveNetworkServices';
import PenetrationTesting from './pages/PenetrationTesting';
import Presentation from './pages/Presentation';
import ServerManagement from './pages/ServerManagement';
import ServiceLevelAgreements from './pages/ServiceLevelAgreements';
import Services from './pages/Services';
import StorageBackup from './pages/StorageBackup';
import __Layout from './Layout.jsx';


export const PAGES = {
    "AIContentAssistant": AIContentAssistant,
    "About": About,
    "ActiveNetworkServices": ActiveNetworkServices,
    "Contact": Contact,
    "DataCenterRelocation": DataCenterRelocation,
    "EmailSecurity": EmailSecurity,
    "EndpointSecurity": EndpointSecurity,
    "FirewallSecurity": FirewallSecurity,
    "Home": Home,
    "ITAssessment": ITAssessment,
    "PassiveNetworkServices": PassiveNetworkServices,
    "PenetrationTesting": PenetrationTesting,
    "Presentation": Presentation,
    "ServerManagement": ServerManagement,
    "ServiceLevelAgreements": ServiceLevelAgreements,
    "Services": Services,
    "StorageBackup": StorageBackup,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};