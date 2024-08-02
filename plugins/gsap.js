import { defineNuxtPlugin } from '#app'
import gsap from 'gsap'
import MotionPathPlugin from 'gsap/MotionPathPlugin'
import { CSSPlugin } from 'gsap/CSSPlugin'

gsap.registerPlugin(MotionPathPlugin, CSSPlugin)

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.provide('gsap', gsap)
})