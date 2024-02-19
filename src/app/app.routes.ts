import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';

export const routes: Routes = [
    {
        title: 'Home',
        path: '',
        component: HomeComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];
