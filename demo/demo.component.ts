import {Component} from '@angular/core';

@Component({
  selector: 'demo-app',
  template: `
      <nav class="navbar navbar-default">
          <div class="container-fluid">
              <h1>{{title}}</h1>
          </div>
      </nav>

      <div class="panel panel-default">
        <div class="panel-heading">
          <h2>Matches</h2>
        </div>
        <div class="panel-body">
          <div class="col-md-4">
            <div class="panel panel-default">
              <div class="panel-heading">
                  <h2>Matches type: 'default'</h2>
              </div>
              <div class="panel-body">
                  <zssport-match [matchId]="201617010801"></zssport-match>
                  <zssport-match [matchId]="201617010802"></zssport-match>
                  <zssport-match [matchId]="201617010810"></zssport-match>
              </div>
            </div>
          </div> 
        </div>
      </div>

      <div class="panel panel-default">
          <div class="panel-heading">
                <h2>Rounds</h2>
          </div>
          <div class="panel-body">
              <div class="col-md-4">
                  <div class="panel panel-default">
                      <div class="panel-heading">
                            <h2>Matches requested by round</h2>
                      </div>
                      <div class="panel-body">
                          <zssport-round [roundId]="2016170208"></zssport-round>
                      </div>
                  </div>
              </div>
              <div class="col-md-4">
                  <div class="panel panel-default">
                      <div class="panel-heading">
                            <h2>Matches requested by round</h2>
                      </div>
                      <div class="panel-body">
                        <zssport-round [roundId]="2016170209"></zssport-round>
                      </div>
                  </div>
              </div>
              <div class="col-md-4">
                  <div class="panel panel-default">
                      <div class="panel-heading">
                            <h2>Matches requested by round</h2>
                      </div>
                      <div class="panel-body">
                        <zssport-round [roundId]="2016170212"></zssport-round>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    `
})

export class Demo {
  title = "Demos";
}
