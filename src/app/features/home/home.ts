import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AboutSection } from './sections/about-section/about-section';
import { ContactSection } from './sections/contact-section/contact-section';
import { HeroSection } from './sections/hero-section/hero-section';
import { ProjectsSection } from './sections/projects-section/projects-section';
import { SkillsSection } from './sections/skills-section/skills-section';

/** Landing page: composes the hero, about, skills, projects and contact sections in order. */
@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [HeroSection, AboutSection, SkillsSection, ProjectsSection, ContactSection],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
