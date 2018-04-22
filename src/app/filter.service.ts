import { EventEmitter, Injectable } from '@angular/core';

export class FilterService {
    searchTerm = new EventEmitter<string>();
}