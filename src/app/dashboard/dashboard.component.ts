import { ChangeDetectionStrategy, Component } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-dashboard',
  template: `
    <mat-toolbar color="primary" class="toolbar">
      <span>Dashboard</span>
      <span class="spacer"></span>
      <button mat-icon-button>
        <mat-icon>notifications</mat-icon>
      </button>
      <button mat-icon-button>
        <mat-icon>account_circle</mat-icon>
      </button>
    </mat-toolbar>

    <div class="dashboard-container">
      <mat-sidenav-container class="sidenav-container">
        <mat-sidenav mode="side" opened>
          <mat-nav-list>
            <a mat-list-item href="#">Home</a>
            <a mat-list-item href="#">Profile</a>
            <a mat-list-item href="#">Settings</a>
          </mat-nav-list>
        </mat-sidenav>

        <mat-sidenav-content>
          <div class="content">
            <mat-grid-list cols="3" rowHeight="2:1" gutterSize="16px">
              <mat-grid-tile
                *ngFor="let tile of tiles"
                [colspan]="tile.cols"
                [rowspan]="tile.rows"
              >
                <mat-card>
                  <mat-card-header>
                    <mat-card-title>{{ tile.title }}</mat-card-title>
                  </mat-card-header>
                  <mat-card-content>
                    {{ tile.content }}
                  </mat-card-content>
                </mat-card>
              </mat-grid-tile>
            </mat-grid-list>

            <table mat-table [dataSource]="dataSource" style="width: 100%;">
              <!--- Note that these columns can be defined in any order.
        The actual rendered columns are set as a property on the row definition" -->

              <!-- Position Column -->
              <ng-container matColumnDef="position">
                <th mat-header-cell *matHeaderCellDef>No.</th>
                <td mat-cell *matCellDef="let element">
                  {{ element.position }}
                </td>
              </ng-container>

              <!-- Name Column -->
              <ng-container matColumnDef="name">
                <th mat-header-cell *matHeaderCellDef>Name</th>
                <td mat-cell *matCellDef="let element">{{ element.name }}</td>
              </ng-container>

              <!-- Weight Column -->
              <ng-container matColumnDef="weight">
                <th mat-header-cell *matHeaderCellDef>Weight</th>
                <td mat-cell *matCellDef="let element">{{ element.weight }}</td>
              </ng-container>

              <!-- Symbol Column -->
              <ng-container matColumnDef="symbol">
                <th mat-header-cell *matHeaderCellDef>Symbol</th>
                <td mat-cell *matCellDef="let element">{{ element.symbol }}</td>
              </ng-container>

              <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
              <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
            </table>
          </div>
        </mat-sidenav-content>
      </mat-sidenav-container>
    </div>
  `,
  styleUrls: ['./dashboard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  tiles = [
    {
      title: 'Card 1',
      content: 'Content 1',
      cols: 1,
      rows: 1,
    },
    {
      title: 'Card 2',
      content: 'Content 2',
      cols: 1,
      rows: 1,
    },
    {
      title: 'Card 3',
      content: 'Content 3',
      cols: 1,
      rows: 1,
    },
    {
      title: 'Card 4',
      content: 'Content 4',
      cols: 1,
      rows: 1,
    },
  ];

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
}
