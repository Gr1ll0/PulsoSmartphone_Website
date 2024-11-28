import { Component, AfterViewInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-landing-pulso',
  standalone: true,
  imports: [],
  templateUrl: './landing-pulso.component.html',
  styleUrl: './landing-pulso.component.css'
})
export class LandingPulsoComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.navbarShrink();
    this.initScrollSpy();
    this.collapseResponsiveNavbar();
  }

  private navbarShrink(): void {
    const navbarCollapsible = document.body.querySelector('#mainNav');
    if (!navbarCollapsible) {
      return;
    }

    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove('navbar-shrink');
    } else {
      navbarCollapsible.classList.add('navbar-shrink');
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.navbarShrink();
  }

  private initScrollSpy(): void {
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
      // @ts-ignore para evitar errores de tipo si no tienes tipado para Bootstrap
      new bootstrap.ScrollSpy(document.body, {
        target: '#mainNav',
        offset: 74,
      });
    }
  }

  private collapseResponsiveNavbar(): void {
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = Array.from(
      document.querySelectorAll('#navbarResponsive .nav-link')
    );

    responsiveNavItems.forEach((responsiveNavItem) => {
      responsiveNavItem.addEventListener('click', () => {
        if (
          navbarToggler &&
          window.getComputedStyle(navbarToggler).display !== 'none'
        ) {
          (navbarToggler as HTMLElement).click();
        }
      });
    });
  }
}
