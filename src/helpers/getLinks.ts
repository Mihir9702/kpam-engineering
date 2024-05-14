import { AutomationSolutionsList, ProductServicesList } from "@/helpers/ListOptions";

import DigitalAnimationTransformation from '@/../assets/kpam/Digital Automation Transformation.jpg'
import AutomationSoftware from '@/../assets/kpam/Automation Software.jpg'
import HMISCADA from '@/../assets/kpam/HMI SCADA.jpg'

import RetrofittingMigration from '@/../assets/kpam/RetroFitting Migration.jpg'
import AutomationProcessControls from '@/../assets/kpam/Automation and Process Controls.jpg';
import MachineryDesignConstruction from '@/../assets/kpam/Machinery Design and Construction.jpg';

import OEE from '@/../assets/kpam/Enhancing Overall.jpg';
import ConsultingIntegration from '@/../assets/Consulting and Integration.jpg'
import OnsiteRemoteService from '@/../assets/24-HOUR SERVICE.jpg'

export const AutomationSolutionsLink = [
  {
    title: AutomationSolutionsList[0],
    href: "/digital-automation-transformation",
    src: DigitalAnimationTransformation,
    alt: AutomationSolutionsList[0],
  },
  {
    title: AutomationSolutionsList[1],
    href: "/automation-software-solutions",
    src: AutomationSoftware,
    alt: AutomationSolutionsList[1],
  },
  {
    title: AutomationSolutionsList[2],
    href: "/streamlined-scada",
    src: HMISCADA,
    alt: AutomationSolutionsList[2],
  },
];

export const ProductServicesLink = [
  {
    title: ProductServicesList[0],
    href: "/retrofitting-migration",
    src: RetrofittingMigration,
    alt: ProductServicesList[0],
  },
  {
    title: ProductServicesList[1],
    href: "/strategic-advisory-system-integration",
    src: AutomationProcessControls,
    alt: ProductServicesList[1],
  },
  {
    title: ProductServicesList[2],
    href: "/machinery-design-construction",
    src: MachineryDesignConstruction,
    alt: ProductServicesList[2],
  },

  {
    title: ProductServicesList[3],
    href: "/oee-overall-equipment",
    src: OEE,
    alt: ProductServicesList[3],
  },
  {
    title: ProductServicesList[4],
    href: "/consulting-integration",
    src: ConsultingIntegration,
    alt: ProductServicesList[4],
  },
  {
    title: ProductServicesList[5],
    href: "/onsite-remote-support",
    src: OnsiteRemoteService,
    alt: ProductServicesList[5],
  }
]
