import { AutomationSolutionsList, ProductServicesList } from "@/helpers/ListOptions";

import DigitalAnimationTransformation from '@/../public/kpam/Digital Automation Transformation.jpg'
import AutomationSoftware from '@/../public/kpam/Automation Software.jpg'
import HMISCADA from '@/../public/kpam/HMI SCADA.jpg'

import RetrofittingMigration from '@/../public/kpam/RetroFitting Migration.jpg'
import AutomationProcessControls from '@/../public/kpam/Automation and Process Controls.jpg';
import MachineryDesignConstruction from '@/../public/kpam/Machinery Design and Construction.jpg';

import OEE from '@/../public/kpam/Enhancing Overall.jpg';
import ConsultingIntegration from '@/../public/Consulting and Integration.jpg'
import OnsiteRemoteService from '@/../public/24-HOUR SERVICE.jpg'

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
