import React from 'react'

export default function OfficersDirectory() {
  return (
    <div className="container">
      <div class="content">

        <figure class="org-chart cf">
          <ul class="administration">
            <li>
              <ul class="director">
                <li>
                  <a href="#"><span>Chairman</span></a>
                  <ul class="subdirector">
                    <li><a href="#"><span>Vice Chairman</span></a></li>
                  </ul>
                  <ul class="departments cf">
                    <li><a href="#"><span>Secretary</span></a></li>

                    <li class="department dep-a">
                      <a href="#"><span>Finance</span></a>
                      <ul class="sections">
                        <li class="section"><a href="#"><span>Treasurer</span></a></li>
                        <li class="section"><a href="#"><span>Assistant Treasurer</span></a></li>
                        <li class="section"><a href="#"><span>Auditor</span></a></li>
                        <li class="section"><a href="#"><span>Assistant Auditor</span></a></li>
                      </ul>
                    </li>
                    <li class="department dep-b">
                      <a href="#"><span>Business Management</span></a>
                      <ul class="sections">
                        <li class="section"><a href="#"><span>Casabaan</span></a></li>
                        <li class="section"><a href="#"><span>Tondo</span></a></li>
                        <li class="section"><a href="#"><span>Laoag</span></a></li>
                        <li class="section"><a href="#"><span>Longos</span></a></li>
                        <li class="section"><a href="#"><span>Lomboy</span></a></li>
                      </ul>
                    </li>
                    <li class="department dep-c">
                      <a href="#"><span>Representatives</span></a>
                      <ul class="sections">
                        <li class="section"><a href="#"><span>Casabaan</span></a></li>
                        <li class="section"><a href="#"><span>Tondo</span></a></li>
                        <li class="section"><a href="#"><span>Laoag</span></a></li>
                        <li class="section"><a href="#"><span>Longos</span></a></li>
                        <li class="section"><a href="#"><span>Lomboy</span></a></li>
                      </ul>
                    </li>
                    <li class="department dep-d">
                      <a href="#"><span>Public Information</span></a>
                      <ul class="sections">
                        <li class="section"><a href="#"><span>Casabaan</span></a></li>
                        <li class="section"><a href="#"><span>Tondo</span></a></li>
                        <li class="section"><a href="#"><span>Laoag</span></a></li>
                        <li class="section"><a href="#"><span>Longos</span></a></li>
                        <li class="section"><a href="#"><span>Lomboy</span></a></li>
                      </ul>
                    </li>
                    <li class="department dep-e">
                      <a href="#"><span>Peace and Order</span></a>
                      <ul class="sections">
                      <li class="section"><a href="#"><span>Casabaan</span></a></li>
                        <li class="section"><a href="#"><span>Tondo</span></a></li>
                        <li class="section"><a href="#"><span>Laoag</span></a></li>
                        <li class="section"><a href="#"><span>Longos</span></a></li>
                        <li class="section"><a href="#"><span>Lomboy</span></a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </figure>
      </div>
    </div>
  )
}
