import { AutomationSolutionsList, ProductServicesList } from "@/helpers/ListOptions";

import DigitalAnimationTransformation from '@/../public/kpam/Digital Automation Transformation.jpg'
import AutomationSoftware from '@/../public/kpam/Automation Software.jpg'
import HMISCADA from '@/../public/kpam/HMI SCADA.jpg'

import RetrofittingMigration from '@/../public/kpam/RetroFitting Migration.jpg'
import AutomationProcessControls from '@/../public/kpam/Automation and Process Controls.jpg';
import MachineryDesignConstruction from '@/../public/kpam/Machinery Design and Construction.jpg';

export const cards = [
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
    href: "/hmi-scada-programming",
    src: HMISCADA,
    alt: AutomationSolutionsList[2],
  },
];

export const moreCards = [
  {
    title: ProductServicesList[0],
    href: "/retrofitting-migration",
    src: RetrofittingMigration,
    alt: ProductServicesList[0],
  },
  {
    title: ProductServicesList[1],
    href: "/automation-process-controls",
    src: AutomationProcessControls,
    alt: ProductServicesList[1],
  },
  {
    title: ProductServicesList[2],
    href: "/machinery-design-construction",
    src: MachineryDesignConstruction,
    alt: ProductServicesList[2],
  },
]
