/***********************************************************************
     
 Copyright (c) 2008, 2009, Ayush Mishra, www.Ayushmishra.design
 *** Ayush Mishra Designs ***
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of MSA Visuals nor the names of its contributors
 *       may be used to endorse or promote products derived from this software
 *       without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
 * THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS
 * OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
 * OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE
 * OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * ***********************************************************************/

const N_FRAMES = 50;
let n = 8;
let r = 200;

function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(0);
  strokeWeight(2);
  noFill();
}

function draw() {
  background(255);
  translate(width/2, height/2);
  
	let points = [];
	for (let theta = 0; theta < TWO_PI; theta += TWO_PI/6) {
		points.push(createVector(r*cos(theta), r*sin(theta)));
	}
	
	beginShape();
	for (let p of points) {
		vertex(p.x, p.y);
	}
	endShape();
	
	line(0, 0, points[0].x, points[0].y);
	line(0, 0, points[2].x, points[2].y);
	line(0, 0, points[4].x, points[4].y);
  
  let t = (frameCount%N_FRAMES)/N_FRAMES;
  for (let i = 0; i < n; i++) {
		for (let j = 0; j < points.length-2; j += 2) {
			let pi = points[j];
			let pj = points[j+1];
			let pk = points[(j+2)%points.length];
			
			let x = map(i+t, 0, n, 0, pj.x);
			let y = map(i+t, 0, n, 0, pj.y);
			line(pi.x, pi.y, x, y);
			line(x, y, pk.x, pk.y);
		}
  }
}