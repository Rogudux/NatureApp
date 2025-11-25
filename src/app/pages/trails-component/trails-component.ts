import { Component, OnInit } from '@angular/core';
import { TrailService } from '../../core/services/trail.service';
import { TrailModel } from '../../core/models/trail.model';
import { AiAnalyze } from '../../core/models/ai-analyzeTrails.model';

@Component({
  selector: 'app-trails',
  templateUrl: './trails-component.html',
  styleUrls: ['./trails-component.scss'],
  standalone: false
})
export class TrailsComponent implements OnInit {

  trails: TrailModel[] = [];
  loading = false;
  error: string | null = null;
  loadingModal = false;
  modalVisible = false;
  analyze : AiAnalyze |null = null

  constructor(private trailService: TrailService) {}


  analyzeTrails() {
    console.log('ANALIZANDOOOO.....');
    this.loadingModal = true;
    this.trailService.getAiAnalyzeTrails().subscribe({
      next: (res) => {
        console.log(res);
        this.loadingModal = false;
        this.analyze = res
        this.modalVisible = true
      },
      error: (error) => {
        console.error(error);
        this.loading = false;
      }
    });

  }

  ngOnInit(): void {
    this.loading = true;
    this.trailService.getAllTrails().subscribe({
      next: (res) => {
        this.trails = res;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'No se pudieron cargar los senderos';
        console.error(err);
        this.loading = false;
      }
    });
  }

  trackById(index: number, item: TrailModel) {
    return item.id;
  }

  // Colores por dificultad (ajústalo a tu gusto)
  difficultyColor(d: string | null | undefined): string {
    const val = (d || '').toLowerCase();
    if (val.includes('facil') || val.includes('fácil') || val.includes('easy')) return 'green';
    if (val.includes('mod') || val.includes('moderado') || val.includes('moderate')) return 'orange';
    if (val.includes('difi') || val.includes('difícil') || val.includes('hard')) return 'red';
    return 'default';
  }
}
