
mod rounding_mode;
pub use rounding_mode::*;

extern "C" {
	fn sse_cw() -> u32;
	fn sse_set_cw(cw: u32);
	fn sse_round_upward();
	fn sse_round_downward();
	fn sse_round_tonearest();
	fn sse_round_truncate();
}

#[derive(Debug,Clone)]
/// RoundingState Keep track of the current rounding mode of both the SSE and the x87 FPU units.
pub struct RoundingState {
    sse_cw: u32,
    fpu_cw: u32,
    see_rounding: RoundingMode,
    fpu_rounding: RoundingMode,
}


impl RoundingState {
	
	/// Create new RoundingState struct and fill it with the current status of control regiters.
    pub fn new() -> Self {
        let sse_dflt_cw: u32 = unsafe {
           sse_cw()
        };

        RoundingState {
            sse_cw: sse_dflt_cw,
            fpu_cw: 0u32,
            see_rounding: RoundingMode::Default,
            fpu_rounding: RoundingMode::Default,
        }

    }
	
	/// Return the current rounding mode of both SSE and FPU.
    pub fn current_rounding(&self) -> (RoundingMode,RoundingMode) {
    	(self.see_rounding, self.fpu_rounding)
    }
    
    /// Return the current rounding mode of the SSE unit.
    pub fn sse_rounding(&self) -> RoundingMode {
    	self.see_rounding
    }
    
    /// Return the current rounding mode of x87 FPU unit.
    pub fn fpu_rounding(&self) -> RoundingMode {
    	self.fpu_rounding
    }
	
	/// Set the rounding mode toward +infinity for both SSE and x87 FPU.
    pub fn upward(&mut self) {
    	self.see_rounding = RoundingMode::Upward;
    	self.fpu_rounding = RoundingMode::Upward;
    	unsafe {
    		sse_round_upward();
    	}
    }
	
	/// Set the rounding mode toward -infinity for both SSE and x87 FPU.
    pub fn downward(&mut self) {
    	self.see_rounding = RoundingMode::Downward;
    	self.fpu_rounding = RoundingMode::Downward;
    	unsafe {
    		sse_round_downward();
    	}
    }
	
	/// Set the rounding mode to nearest for both SSE and x87 FPU.
    pub fn to_nearest(&mut self) {
    	self.see_rounding = RoundingMode::Nearest;
    	self.fpu_rounding = RoundingMode::Nearest;
    	unsafe {
    		see_round_tonearest();
    	}
    }
	
	/// Set the rounding mode as truncate for both SSE and x87 FPU.
    pub fn truncate(&mut self) {
    	self.see_rounding = RoundingMode::Truncate;
    	self.fpu_rounding = RoundingMode::Truncate;
    	unsafe {
    		see_round_truncate();
    	}
    }

}

/// Drop trait is implimented as when going out of scope the default status of the control registers.
/// is retrived.
impl Drop for RoundingState {
	fn drop(&mut self) {
		unsafe {
			sse_set_cw(self.sse_cw);
		}
	}
}
