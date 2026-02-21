import { defineConfig } from 'vite';
import { resolve } from 'path';
import { profileData, resumeData, projectsData, servicesData } from './src/js/data.js';

export default defineConfig({
    css: {
        preprocessorOptions: {
            scss: {
                quietDeps: true,
                silenceDeprecations: ['import'],
            },
        },
    },
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                resume: resolve(__dirname, 'resume.html'),
                projects: resolve(__dirname, 'projects.html'),
                contact: resolve(__dirname, 'contact.html'),
            },
        },
    },
    plugins: [
        {
            name: 'html-transform',
            transformIndexHtml(html) {
                let out = html;

                // Simple replacements
                out = out.replace(/__NAME__/g, profileData.name);
                out = out.replace(/__TITLE__/g, profileData.title);
                out = out.replace(/__TAGLINE__/g, profileData.tagline);
                out = out.replace(/__HIGHLIGHT__/g, profileData.highlight);
                out = out.replace(/__PROFILE_IMG__/g, profileData.profileImg);
                out = out.replace(/__FAVICON__/g, profileData.favicon);
                out = out.replace(/__ABOUT_TITLE__/g, profileData.about.title);
                out = out.replace(/__ABOUT_SUBTITLE__/g, profileData.about.subtitle);
                out = out.replace(/__ABOUT_DESCRIPTION__/g, profileData.about.description);
                out = out.replace(/__TWITTER__/g, profileData.socials.twitter);
                out = out.replace(/__LINKEDIN__/g, profileData.socials.linkedin);
                out = out.replace(/__GITHUB__/g, profileData.socials.github);
                out = out.replace(/__COPYRIGHT_YEAR__/g, new Date().getFullYear());

                // Array replacements (Experience)
                if (out.includes('<!-- EXPERIENCE_LIST -->')) {
                    const cards = resumeData.experience.map(exp => `
                        <div class="card shadow border-0 rounded-4 mb-5">
                            <div class="card-body p-5">
                                <div class="row align-items-center gx-5">
                                    <div class="col text-center text-lg-start mb-4 mb-lg-0">
                                        <div class="bg-light p-4 rounded-4">
                                            <div class="text-primary fw-bolder mb-2">${exp.period}</div>
                                            <div class="small fw-bolder">${exp.role}</div>
                                            <div class="small text-muted">${exp.company}</div>
                                            <div class="small text-muted">${exp.location}</div>
                                        </div>
                                    </div>
                                    <div class="col-lg-8"><div>${exp.description}</div></div>
                                </div>
                            </div>
                        </div>`).join('');
                    out = out.replace('<!-- EXPERIENCE_LIST -->', cards);
                }

                // Array replacements (Education)
                if (out.includes('<!-- EDUCATION_LIST -->')) {
                    const cards = resumeData.education.map(edu => `
                        <div class="card shadow border-0 rounded-4 mb-5">
                            <div class="card-body p-5">
                                <div class="row align-items-center gx-5">
                                    <div class="col text-center text-lg-start mb-4 mb-lg-0">
                                        <div class="bg-light p-4 rounded-4">
                                            <div class="text-secondary fw-bolder mb-2">${edu.period}</div>
                                            <div class="mb-2">
                                                <div class="small fw-bolder">${edu.institution}</div>
                                                <div class="small text-muted">${edu.location}</div>
                                            </div>
                                            <div class="fst-italic">
                                                <div class="small text-muted">${edu.degree}</div>
                                                <div class="small text-muted">${edu.field}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-8"><div>${edu.description}</div></div>
                                </div>
                            </div>
                        </div>`).join('');
                    out = out.replace('<!-- EDUCATION_LIST -->', cards);
                }

                // Array replacements (Skill Sections - Dynamic N quantity)
                if (out.includes('<!-- SKILL_SECTIONS_LIST -->')) {
                    const sections = resumeData.skillSections.map(section => `
                        <div class="mb-5">
                            <div class="d-flex align-items-center mb-4">
                                <div class="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
                                    <i class="bi ${section.icon}"></i>
                                </div>
                                <h3 class="fw-bolder mb-0"><span class="text-gradient d-inline">${section.title}</span></h3>
                            </div>
                            <div class="row row-cols-1 row-cols-md-3 mb-4">
                                ${section.tags.map(tag => `
                                    <div class="col mb-4 mb-md-3">
                                        <div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">${tag}</div>
                                    </div>`).join('')}
                            </div>
                        </div>`).join('');
                    out = out.replace('<!-- SKILL_SECTIONS_LIST -->', sections);
                }

                // Array replacements (Projects)
                if (out.includes('<!-- PROJECTS_LIST -->')) {
                    const cards = projectsData.map(project => `
                        <div class="card overflow-hidden shadow rounded-4 border-0 mb-5">
                            <div class="card-body p-0">
                                <div class="d-flex align-items-center">
                                    <div class="p-5">
                                        <h2 class="fw-bolder">${project.name}</h2>
                                        <p>${project.description}</p>
                                    </div>
                                    <img class="img-fluid" src="${project.image}" alt="..." style="width: 300px; height: 400px; object-fit: cover;"/>
                                </div>
                            </div>
                        </div>`).join('');
                    out = out.replace('<!-- PROJECTS_LIST -->', cards);
                }

                // Array replacements (Services - Dynamic)
                if (out.includes('<!-- SERVICES_LIST -->')) {
                    const items = servicesData.map(service => `
                        <div class="col-md-4 mb-5">
                            <div class="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 mb-3">
                                <i class="bi ${service.icon}"></i>
                            </div>
                            <h3 class="h4 fw-bolder">${service.title}</h3>
                            <p>${service.description}</p>
                        </div>`).join('');
                    out = out.replace('<!-- SERVICES_LIST -->', items);
                }


                return out;
            }
        }
    ]
});
