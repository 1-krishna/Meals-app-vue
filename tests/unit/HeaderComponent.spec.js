import HeaderComponent from '@/components/HeaderComponent'
import { shallowMount } from '@vue/test-utils'
import { expect } from 'chai'


describe('testing header-component', () => {
    let wrapper = shallowMount(HeaderComponent)
    let inputField = wrapper.find('.customInput')
    inputField.element.value = "chicken"
    inputField.trigger('input')

    // it("testing data item propery", () => {
    //     expect(wrapper.vm.item).to.equal("apple")
    // })

    it("testing enable the Add button", () => {
        const addItemButton = wrapper.find('button')
        expect(addItemButton.element.disabled).to.be.false
    })

    // it("testing items data property", () => {
    //     const addItemButton = wrapper.find("button")
    //     addItemButton.trigger("submit")
    //     expect(wrapper.vm.items).to.contain("apple")
    // })

    // it("set item data property to a blank string", () => {
    //     let inputField = wrapper.find('input')
    //     expect(wrapper.vm.item).to.equal('')
    //     expect(inputField.element.value).to.equal('')
    // })

    // it("test disable the Add button", () => {
    //     const addItemButton = wrapper.find("button")
    //     expect(addItemButton.element.disabled).to.be.true
    // })
})