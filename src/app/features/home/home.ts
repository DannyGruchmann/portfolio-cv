import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AboutSection } from './sections/about-section';
import { ContactSection } from './sections/contact-section';
import { HeroSection } from './sections/hero-section';
import { ProjectsSection } from './sections/projects-section';
import { SkillsSection } from './sections/skills-section';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [HeroSection, AboutSection, SkillsSection, ProjectsSection, ContactSection],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
