package org.acaf.backend.controllers;

import java.util.List;

import org.acaf.backend.models.Member;
import org.acaf.backend.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/members")

public class MemberController {

    @Autowired
    private MemberService memberService;

    @GetMapping
    public List<Member> findAll() {
        return memberService.findAll();
    }

    @PostMapping
    public Member create(@RequestBody Member member) {
        return memberService.save(member);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<Member> updateMember(@PathVariable Integer id, @RequestBody Member member) {

        Member member2 = memberService.updatedMember(id, member);
        return new ResponseEntity<>(member2, HttpStatus.OK);
    }
}