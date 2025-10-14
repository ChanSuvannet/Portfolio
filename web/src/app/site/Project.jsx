import {
  IconBrandGithub,
  IconFilter,
  IconTableColumn,
  IconWorld
} from "@tabler/icons-react";
import { useState } from 'react';
import AMTImage from '../../assets/projects/amt.png';
import CCNImage from '../../assets/projects/ccn.png';
import DmsImage from '../../assets/projects/dms.png';
import MMEImage from '../../assets/projects/mme.png';
import TDMSImage from '../../assets/projects/tdms.png';
import { SeeMoreButton } from '../../components/seemore';
// Professional Project Data
const projectsData = [
  {
    id: 1,
    title: "Technical Document Management System",
    description: "Platform focus on file organization by subject/category, priority pinning for critical documents, streamlined project publishing document. Built with role-based access control.",
    category: "Application",
    technologies: ["PHP", "Laravel", "Angular", "MySQL"],
    status: "Completed",
    image: TDMSImage,
    icon: <IconTableColumn className="h-5 w-5 text-blue-600" />,
    className: "md:col-span-1",
    link: "#"
  },
  {
    id: 2,
    title: "Document Management System",
    description: "A comprehensive enterprise-grade document management system featuring advanced review and approval workflows, intelligent task assignment with role-based permissions, real-time collaboration and progress tracking powered by WebSocket integration, and automated workflow generation with one-click PDF export capabilities. Designed for secure document governance, audit compliance, and enhanced team productivity.",
    category: "Application",
    technologies: ["Nest.js", "Angular", "PostgreSQL", "Docker"],
    status: "Completed",
    image: DmsImage,
    icon: <IconTableColumn className="h-5 w-5 text-blue-600" />,
    className: "md:col-span-2",
    documentation: "https://skitter-agenda-833.notion.site/Document-Management-System-21e07e0faa4e81059015c853045da6f1",
    website: "#",
    link: "#"
  },
  {
    id: 3,
    title: "Cambodian Council of Nurses (CCN) Management System",
    description: "Professional nurse registry platform enabling comprehensive nurse management, license application processing, automated renewal license, seamless workplace transfer handling, training program tracking, and presentation/document management. Features secure multi-role authentication, audit-compliant workflows and verify license by QR.",
    category: "Application",
    technologies: ["Nuxt", "Angular", "Nest.js", "PostgreSQL"],
    status: "Completed",
    image: CCNImage,
    icon: <IconTableColumn className="h-5 w-5 text-blue-600" />,
    className: "md:col-span-2",
    link: "#"
  },
  {
    id: 4,
    title: "ប្រព័ន្ធចុះលេខលិខិតចេញរ៉ែនិងថាមពល (DRS)",
    description: "ត្រូវបានអភិវឌ្ឍដើម្បីគ្រប់គ្រងការចុះលេខលិខិត រដ្ឋបាលដោយស្វ័យប្រវត្ត តាមដានស្ថានភាពលិខិត ឯកសារចម្លងអន្តរក្រសួង-ស្ថាប័ន ផ្ទៀងផ្ទាត់ និងទាញយកឯកសារ តាមរយៈផ្ទាល verify.mme.gov.kh ដោយប្រើប្រាស់ QR Coder",
    category: "Application",
    technologies: ["Nuxt", "Angular", "Nest.js", "PostgreSQL"],
    status: "Completed",
    image: MMEImage,
    icon: <IconTableColumn className="h-5 w-5 text-blue-600" />,
    className: "md:col-span-1",
    link: "#"
  },
  {
    id: 4,
    title: "សមាគមសិស្ស-និស្សិត​​​​ ​អ.ម.ត ២ - អ.ម.ត ចិន (AMT)",
    description: "ចុះឈ្មោះសិស្ស-និស្សិតថ្មី, ការដាក់ពាក្យអាហារូបករណ៍, ការពិនិត្យពាក្យសិស្ស-និស្សិត, ​បង្កើនប្រសិទ្ធភាពនៃការគ្រប់គ្រងទិន្នន័យ",
    category: "Application",
    technologies: ["Nest.js", "Angular", "PostgreSQL"],
    status: "Completed",
    image: AMTImage,
    icon: <IconTableColumn className="h-5 w-5 text-blue-600" />,
    className: "md:col-span-1",
    link: "#"
  },
];

// Filter Categories
const filterCategories = [
  { id: 'all', label: 'All Projects', count: projectsData.length },
  { id: 'opensource', label: 'Open Source', count: projectsData.filter(p => p.category === 'Open Source').length },
  { id: 'application', label: 'Applications', count: projectsData.filter(p => p.category === 'Application').length }
];

// Professional Components
const FilterButton = ({ active, onClick, children, count }) => (
  <button
    onClick={onClick}
    className={`
      px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 flex items-center gap-2
      ${active
        ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-md'
        : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 hover:border-gray-400'
      }
    `}
  >
    {children}
    <span className={`text-xs px-2 py-1 rounded-full ${active ? 'bg-gradient-to-r from-pink-500 to-purple-700' : 'bg-gray-200'}`}>
      {count}
    </span>
  </button>
);

const ProjectCard = ({ project }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800 border-green-200';
      case 'In Development': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Active': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className={`group relative bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 ${project.className}`}>
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden bg-gray-100">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 text-xs font-medium rounded-full border ${getStatusColor(project.status)}`}>
            {project.status}
          </span>
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/90 text-gray-700 border border-gray-200">
            {project.category}
          </span>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <div className="flex items-start gap-3 mb-4">
          <div className="flex-shrink-0 p-2 bg-gray-50 rounded-lg">
            {project.icon}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
          <a
            href={project.documentation || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors text-center"
          >
            View Project
          </a>
          {project.category === 'Open Source' && (
            <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <IconBrandGithub className="h-4 w-4 text-gray-600" />
            </button>
          )}
          <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <IconWorld className="h-4 w-4 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

const ProjectGrid = ({ projects }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
    {projects.map((project) => (
      <ProjectCard key={project.id} project={project} />
    ))}
  </div>
);

const EmptyState = ({ activeFilter }) => (
  <div className="text-center py-16">
    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
      <IconFilter className="h-8 w-8 text-gray-400" />
    </div>
    <h3 className="text-lg font-medium text-gray-900 mb-2">No projects found</h3>
    <p className="text-gray-600">
      {activeFilter === 'all'
        ? 'No projects available at the moment.'
        : `No ${activeFilter} projects found. Try selecting a different filter.`
      }
    </p>
  </div>
);

// Main Component
const ProfessionalProjectComponent = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = projectsData.filter(project => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'opensource') return project.category === 'Open Source';
    if (activeFilter === 'application') return project.category === 'Application';
    return true;
  });

  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 4);

  return (
    <div className="min-h-screen px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center pt-2 max-980:justify-center">
            <h1 className="text-3xl font-bold">Recent Works</h1>
          </div>
        </div>

        {/* Filter Section */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3">
            {filterCategories.map((category) => (
              <FilterButton
                key={category.id}
                active={activeFilter === category.id}
                onClick={() => {
                  setActiveFilter(category.id);
                  setShowAll(false); // Reset on filter change
                }}
                count={category.count}
              >
                {category.label}
              </FilterButton>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="mb-8">
          {visibleProjects.length > 0 ? (
            <ProjectGrid projects={visibleProjects} />
          ) : (
            <EmptyState activeFilter={activeFilter} />
          )}
        </div>

        {/* See More Button */}
        {!showAll && filteredProjects.length > 4 && (
          <div className="mt-4 text-center">
            <SeeMoreButton
              showAll={showAll}
              setShowAll={setShowAll}
              filteredProjects={filteredProjects}
            />
          </div>
        )}
      </div>
      <br />
      <br />
    </div>
  );
};


export default ProfessionalProjectComponent;